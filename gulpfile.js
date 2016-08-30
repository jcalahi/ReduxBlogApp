var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('reload', browserSync.reload);

gulp.task('build-js', function() {
    return browserify({
      entries: ['./app/src/index.js'],
      transform: babelify
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('rebuild-js', ['build-js'], browserSync.reload);

gulp.task('watch-files', function() {
  gulp.watch([
    'index.html',
    './app/assets/css/styles.css'
  ], ['reload']);
  gulp.watch([
    './app/src/**/*.js',
    '!./app/src/index.js/*.js'
  ], ['rebuild-js']);
});

gulp.task('init', function() {
  browserSync.init({
    server: {
      baseDir: ['./', './src'],
      middleware: [historyApiFallback()],
      index: 'index.html'
    }
  });
});

gulp.task('default', ['build-js', 'watch-files', 'init']);
