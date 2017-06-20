var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpStylelint = require('gulp-stylelint');

gulp.task('lint-sass', function() {
	return gulp.src(['./*.scss', './custom/*.scss', './components/*.scss', './components/**/*.scss'])
	.pipe(gulpStylelint({
		reporters: [
			{formatter: 'string', console: true}
		]
	}));
});

// This is only used to validate the code is able to compile
gulp.task('sass', function () {
  return gulp.src('./index.scss')
  	.pipe(sass().on('error', sass.logError));
});

gulp.task('default', function() {
    return gulp.parallel('sass', 'lint-sass')
});
