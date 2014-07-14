'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');


gulp.task('serve', function() {
	browserSync.init(['./build/app/**'], {
		server: {
			baseDir: './build/app'
		},
        injectChanges: false,
        files: ['./build/app/js/**/*.js', './build/app/css/*.css', './build/app/*.html']
	});
});
