'use strict';

var gulp = require('gulp');


gulp.task('env:dev', function () {
    global.debug = true;
});