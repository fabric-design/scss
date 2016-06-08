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
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fs = require('fs');
var path = require('path');

gulp.task('icons', function(done){
    var iconsFoldersPath = 'icons/svg/';
    var folders = getFolders(iconsFoldersPath);

    folders.map(function(folder) {
        var fontName = folder.split('/').pop().replace(' ','-').toLowerCase();
        gulp.src(path.join(iconsFoldersPath, folder, '/**/*.svg'))
            .pipe(iconfontCss({
                fontName: fontName,
                targetPath: `_icons_${fontName}.scss`,
                cssClass: `icon-${fontName.substr(0,3)}`
            }))
            .pipe(iconfont({
                fontName: fontName
            }))
            .pipe(gulp.dest('icons/'));
    });

    done();
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
    gulp.watch('icons/svg/**/*.{svg}', {
        ignoreInitial: false
    }, gulp.series('icons'));
    gulp.watch('./**/*.{html,scss}', {
        ignoreInitial: false
    }, gulp.series('sass'));
})

// utils
function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

var getFolderName = function(file) {
    var filePath = file.history[0]
        .split('/');
    return filePath[filePath.length - 2];
}
