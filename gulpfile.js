var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var del = require('del');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(), { base: 'assets/components' })
    .pipe(gulp.dest('./public/lib'))
    .pipe(plugins.notify({ message: 'bower task complete' }));
});

gulp.task('bootstrap:preparation', ['bower'], function() {
  return gulp.src('./assets/sass/bootstrap/variables.scss')
    .pipe(gulp.dest('./public/lib/twbs-boostrap-sass/assets/stylesheets/bootstrap/_variables.scss'))
    .pipe(plugins.notify({ message: 'bootstrap preparation complete' }));
});

gulp.task('bootstrap', ['bootstrap:preparation'], function() {
  return gulp.src('./public/lib/twbs-bootstrap-sass/assets/stylesheets/_bootstrap.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.minify-css())
    .pipe(gulp.dest('./public/css'))
    .pipe(plugins.notify({ message: 'Bootstrap task complete' }))
});

gulp.task('styles', function() {
  return gulp.src('./assets/sass/main.scss')
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./public/css'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.minify-css())
    .pipe(gulp.dest('./public/css'))
    .pipe(plugins.notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public/js'))
    .pipe(plugins.notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('./assets/img/**/*')
    .pipe(plugins.cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./public/img'))
    .pipe(plugins.notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
  del(['./public/css', './public/js', './public/img', './public/lib'], cb);
});

gulp.task('default', ['clean'], function() {
  gulp.start('bootstrap', 'styles', 'scripts', 'images');
});

gulp.task('watch', function() {
  //Watch .sass files
  gulp.watch('./assets/sass/**/*.scss', ['styles']);

  //Watch .js files
  gulp.watch('./assets/js/**/*.js', ['scripts']);

  //Watch image files
  gulp.watch('./assets/img/**/*', ['images']);

  //Create LiveReloaded server
  plugins.livereload.listen();

  //Watch any files in assets/, reload on change
  gulp.watch(['./public/**']).on('change', plugins.livereload.changed);
});
