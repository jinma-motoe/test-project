const config = require('../config.json')
const gulp = require('gulp')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const babelify = require('babelify')
const watchify = require('watchify')

watchify.args.debug = true

// input file
let bundler = watchify(
  browserify(
    config.PATH.src.modules.split('*')[0] + 'bundle.js', watchify.args)
)

// babel transform
bundler.transform(babelify.configure({
  presets: ['es2015'],
  sourceMapRelative: config.PATH.src.modules.split('*')[0]
  .slice(0, -1)
}))

// on updates recompile
bundler.on('update', bundle)
function bundle() {
  return bundler.bundle().on('error', function (err) {
    console.log(err.message)
    browserSync.notify("Browserify Error!")
    this.emit("end")
  })
  .pipe(source('script.js'))
  .pipe(gulp.dest(config.PATH.dist))
  .pipe(browserSync.stream({ once: true }))
}

gulp.task('modules', function () {
  return bundle()
})
