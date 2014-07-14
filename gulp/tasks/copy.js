'use strict';

var gulp = require('gulp');


gulp.task('copy', function () {
    return gulp.src('src/html/index.html')
        .pipe(gulp.dest('./build/app'));
});
