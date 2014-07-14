'use strict';

var gulp = require('gulp');


gulp.task('watch', ['setWatch', 'serve'], function() {
	gulp.watch('src/less/**', ['less']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/html/index.html', ['copy']);
	gulp.watch(['src/html/index.html', 'src/js/**/*.js'], ['scripts']);
});
