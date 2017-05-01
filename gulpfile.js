// require
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const requires = require('require-dir')

// global variable
global.browserSync = browserSync;

requires('./gulp_tasks')

gulp.task('default', ['resource', 'html', 'sass', 'modules', 'server'])
