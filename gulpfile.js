var gulp    = require('gulp'),
  minifycss   = require('gulp-minify-css'),
  jshint      = require('gulp-jshint'),
  stylish     = require('jshint-stylish'),
  uglify      = require('gulp-uglify'),
  usemin      = require('gulp-usemin'),
  imagemin    = require('gulp-imagemin'),
  rename      = require('gulp-rename'),
  concat      = require('gulp-concat'),
  notify      = require('gulp-notify'),
  cache       = require('gulp-cache'),
  changed     = require('gulp-changed'),
  rev         = require('gulp-rev'),
  browserSync = require('browser-sync'),
  ngannotate  = require('gulp-ng-annotate'),
  del         = require('del');

  var babel = require('gulp-babel');
  var minifyHTML = require('gulp-minify-html'); // Minify HTML

  gulp.task('jshint', function() {
  return gulp.src(['app/components/*.js', 'app/components/**/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('html', 'usemin', 'imagemin','copyfonts');
});

// Task to minify new or changed HTML pages
gulp.task('html', function() {
  gulp.src(['./app/*.html'])
    //.pipe(minifyHTML())
    .pipe(gulp.dest('./dist'));

  gulp.src(['./app/components/**/*.html'])
    //.pipe(minifyHTML())
    .pipe(gulp.dest('./dist/components'));
});

gulp.task('usemin',['jshint'], function () {
  return gulp.src(['./app/*.html', './app/components/*.html'])
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [babel({presets: ['es2015']}), ngannotate(), uglify(), rev()]
      }))
      .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('imagemin', function() {
  return del(['dist/img']), gulp.src('app/img/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('copyfonts', ['clean'], function() {    
   gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('./dist/fonts'));
});

// Watch
gulp.task('watch', ['default'], function() {
  // Watch .js files
  gulp.watch('{app/components/**/*.js, app/components/**/*.js}', ['usemin']);
  gulp.watch('{app/components/**/*.html, app/components/*.html}', ['usemin']);
  
  // Watch image files
  gulp.watch('app/images/**/*', ['imagemin']);
});