const config = require('../config.json')
const gulp = require('gulp')

gulp.task('html', function () {
	return gulp.src(config.PATH.src.html)
		.pipe(gulp.dest(config.PATH.dist))
})
