const config = require('../config.json')
const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const lost = require('lost')
const textRemoveGap = require('postcss-text-remove-gap')


gulp.task('sass', function () {
	let plugins = [
		lost,
	  autoprefixer({
			browsers: [
				'last 3 version',
				'ie >= 9',
				'Android >= 4',
				'ios_saf >= 8'
			]
		}),
		textRemoveGap({
			prefix: 'rm'
		})
  ]

	return gulp.src(config.PATH.src.styles)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(postcss(plugins))
		.pipe(gulp.dest(config.PATH.dist))
		.pipe(browserSync.stream())
})
