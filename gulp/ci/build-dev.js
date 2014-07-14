'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:dev', function (callback) {
    runSequence('lint', ['clean', 'env:dev'], ['less', 'images', 'copy', 'scripts'], callback);
});
