'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('uglify', function () {
    var dest = './build/app/js';

    return gulp.src('./build/app/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest(dest));
});