var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var del = require('del');

gulp.task('styles', function() {
  return gulp.src('assets/sass/main.scss')
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/styles'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('public/styles'))
});

gulp.task('libs', function() {
  return gulp.src('assets/scripts/libs/*.js')
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/libs'));
});

gulp.task('scripts', function() {
  return gulp.src('assets/scripts/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('public/scripts'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/scripts'))
});

gulp.task('images', function() {
  return gulp.src('assets/img/**/*')
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/img'))
});

gulp.task('clean', function(cb) {
  del(['public/styles', 'public/scripts', 'public/img', 'public/libs'], cb);
});

gulp.task('default', ['clean'], function() {
  gulp.start('libs', 'styles', 'scripts', 'images');
});

gulp.task('watch', function() {
  //Watch .sass files
  gulp.watch('assets/sass/**/*.scss', ['styles']);

  //Watch .js files
  gulp.watch('assets/scripts/**/*.js', ['scripts']);

  //Watch image files
  gulp.watch('assets/img/**/*', ['images']);

  //Create LiveReloaded server
  plugins.livereload.listen();

  //Watch any files in assets/, reload on change
  gulp.watch(['public/**']).on('change', plugins.livereload.changed);
});
