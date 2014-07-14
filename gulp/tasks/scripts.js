'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var clean = require('gulp-clean');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');


gulp.task('tempifyJS', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./build/.tmp/js'));
});


gulp.task('untempifyJS', function () {
    return gulp.src('./build/.tmp')
        .pipe(clean({force: true}));
});


gulp.task('browserifyJS', function () {

    var bundler = browserify({
        entries: ['./build/.tmp/js/app.js']
    });

    var bundle = function () {
        // Log when bundling starts
        bundleLogger.start();

        gutil.log('debug = ' + global.testVar);

        return bundler
            // Enable source maps!
            .bundle({debug: global.debug})
            // Report compile errors
            .on('error', handleErrors)
            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specify the
            // desired output filename here.
            .pipe(source('app.js'))
            // Specify the output destination
            .pipe(gulp.dest('./build/app/js'))
            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    return bundle();
});


gulp.task('scripts', function (callback) {
    runSequence(['tempifyJS', 'templates'], 'browserifyJS', 'untempifyJS', callback);
});