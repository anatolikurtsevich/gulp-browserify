'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');


gulp.task('less', function () {
    var dest = './build/app/css';
    var bundle = gulp.src('./src/less/index.less');

    if (global.debug){
        return bundle.pipe(sourcemaps.init())
            .pipe(less())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(dest));
    } else {
        return bundle.pipe(less())
            .pipe(minifyCSS())
            .pipe(gulp.dest(dest));
    }
});