'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:prod', function (callback) {
    runSequence('lint', ['clean', 'env:prod'], ['less', 'images', 'copy', 'scripts'], callback);
});
