const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpStylelint = require('gulp-stylelint');
const runSequence = require('run-sequence');
const del = require('del');
const conventionalChangelog = require('gulp-conventional-changelog');
const conventionalGitHubReleaser = require('conventional-github-releaser');
const bump = require('gulp-bump');
const argv = require('yargs').argv;
const validBumpTypes = 'major|minor|patch|prerelease'.split('|');
const bumpType = (argv.bump || 'patch').toLowerCase();
const stylelintFormatter = require('stylelint-formatter-pretty');

if (validBumpTypes.indexOf(bumpType) === -1) {
  throw new Error('Unrecognized bump "' + bumpType + '".');
}

const args = {
  bump: bumpType,
  depth: parseInt(argv.depth || '0', 10),
  token: argv.token,
  branch: argv.branch
};

const changelogOpts = {
  preset: 'angular',
  releaseCount: 1,
  targetCommitish: args.branch
};

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', () =>
  gulp.src(['./package.json'])
    .pipe(bump({type: args.bump}))
    .pipe(gulp.dest('./'))
);

// generates the CHANGELOG.md file based on commit
// from git commit messages
gulp.task('changelog', () =>
  gulp.src(`./CHANGELOG.md`)
    .pipe(conventionalChangelog(changelogOpts))
    .pipe(gulp.dest('./'))
);

// calls the listed sequence of tasks in order
gulp.task('prepare-release', callback =>
  runSequence(
    'build',
    'lint',
    'bump-version',
    'changelog',
    callback
  )
);

gulp.task('release', callback => {
  conventionalGitHubReleaser({
    type: 'oauth',
    token: args.token || process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN
  }, changelogOpts, {}, {}, {}, {}, (err, data) => {
    if (err) {
      console.error(err.toString());
      return callback();
    }

    if (!data.length) {
      console.log('No GitHub releases created because no git tags available to work with.');
      return callback();
    }

    let allRejected = true;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].state === 'fulfilled') {
        allRejected = false;
        break;
      }
    }

    if (allRejected) {
      console.error(data);
    } else {
      console.log(data);
    }
    return callback();
  });
});

gulp.task('lint-sass', function() {
	return gulp.src(['./*.scss', './*/*.scss', '!./utils/*.scss'])
	.pipe(gulpStylelint({
		reporters: [
			{formatter: stylelintFormatter, console: true, fix: true}
    ]
	}));
});

// This is only used to validate the code is able to compile
gulp.task('sass', () =>
  gulp.src('./index.scss')
    .pipe(sass().on('error', sass.logError))
);

gulp.task('default', () => gulp.parallel('sass', 'lint-sass'));

gulp.task('build:sass', () => 
  gulp.src('./index.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./build'))
);

gulp.task('clean:dist', () => 
  del(['build/**'])
);

gulp.task('build:dist', gulp.series('clean:dist', 'lint-sass', 'build:sass'));