const config = require('../config.json')
const gulp = require('gulp')

gulp.task('server', function() {
	const staticServer = config.PATH.dist

  browserSync.init({
  	https: false,
		open: false,
		ghostMode: false,
		logLevel: 'debug',
    server: { baseDir: staticServer },
    plugins: [
      {
        module: 'bs-html-injector',
        options: {
          files: ['dist/index.html']
        }
      }
    ]
  })
  gulp.watch(config.PATH.src.styles, ['sass'])
	gulp.watch(config.PATH.src.modules, ['modules'])
  gulp.watch(config.PATH.src.html, ['html'])
})
