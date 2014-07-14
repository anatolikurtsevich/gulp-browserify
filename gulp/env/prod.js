'use strict';

var gulp = require('gulp');


gulp.task('env:prod', function () {
    global.debug = false;
});