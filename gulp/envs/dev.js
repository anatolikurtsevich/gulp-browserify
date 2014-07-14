'use strict';

var gulp = require('gulp');


gulp.task('dev', function () {
    global.debug = true;
    global.testVar = 'hello';
});