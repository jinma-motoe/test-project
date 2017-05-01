const config = require('../config.json')
const gulp = require('gulp')

gulp.task('resource', function () {
	return gulp.src(config.PATH.src.img)
		.pipe(gulp.dest(config.PATH.dist + '/img'))
})
