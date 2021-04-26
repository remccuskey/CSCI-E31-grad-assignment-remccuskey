'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
 return gulp.src('/public/styles/sass/**/*.scss', {allowEmpty: true})
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('/public/styles/css'));
});

gulp.task('watch', function () {
  gulp.watch('/public/styles/sass/**/*.scss', gulp.series('sass'));
});
