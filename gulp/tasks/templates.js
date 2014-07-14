'use strict';

var gulp = require('gulp'),
    minify = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    htmlify = require('gulp-angular-htmlify'),
    templateCache = require('gulp-angular-templatecache');


gulp.task('templates', function () {
    var dest = './build/.tmp/js';

    return gulp.src('./src/html/templates/**/*ng-tmpl.html')
        .pipe(htmlify())
        .pipe(minify())
        .pipe(rename(function(path){
            path.basename = path.basename.replace('.ng-tmpl', '');
            path.extname = '';
        }))
        .pipe(templateCache({
            root: 'html/templates',
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest(dest));
});