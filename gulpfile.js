/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var fs = require('fs');
var path = require('path');
var gulpStylelint = require('gulp-stylelint');

gulp.task('lint-sass', function() {
	return gulp.src(['./*.scss', './custom/*.scss', './components/*.scss', './components/**/*.scss'])
	.pipe(gulpStylelint({
		reporters: [
			{formatter: 'string', console: true}
		]
	}));
});

gulp.task('sass', function () {
  return gulp.src('./index.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./demo'));
});

gulp.task('watch', function() {
    gulp.watch('./**/*.{html,scss}', {
        ignoreInitial: false
    }, gulp.series('sass'));
})
