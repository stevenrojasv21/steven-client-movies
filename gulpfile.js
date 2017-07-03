var gulp = require('gulp'); // Require gulp

// Sass dependencies
//var sass = require('gulp-sass'); // Compile Sass into CSS
var minifyCSS = require('gulp-minify-css'); // Minify the CSS

// Minification dependencies
var minifyHTML = require('gulp-minify-html'); // Minify HTML
var concat = require('gulp-concat'); // Join all JS files together to save space
var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs
var uglify = require('gulp-uglify'); // Minify JavaScript
var imagemin = require('gulp-imagemin'); // Minify images

// Other dependencies
var size = require('gulp-size'); // Get the size of the project
var browserSync = require('browser-sync'); // Reload the browser on file changes
var jshint = require('gulp-jshint'); // Debug JS files
var stylish = require('jshint-stylish'); // More stylish debugging

// Tasks -------------------------------------------------------------------- >

// Task to compile Sass file into CSS, and minify CSS into build directory
gulp.task('styles', function() {
  gulp.src('./app/styles/*.css')
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// Task to minify new or changed HTML pages
gulp.task('html', function() {
  gulp.src(['./app/*.html'])
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'));

  gulp.src(['./app/components/*.html', './app/components/**/*.html'])
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist/components'));
});

// Task to concat, strip debugging and minify JS files
gulp.task('scripts', function() {
  gulp.src(
        [
            './app/componets/*.js', 
            './app/componets/*.js',
            './app/components/**/*.js'
        ]
    )
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'));
});

// Task to minify images into build
gulp.task('images', function() {
  gulp.src('./app/img/*')
  .pipe(imagemin({
    progressive: true,
  }))
  .pipe(gulp.dest('./dist/img'));
});

// Task to run JS hint
gulp.task('jshint', function() {
  gulp.src(['./app/components/*.js', './app/components/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Task to get the size of the app project
gulp.task('size', function() {
  gulp.src('./app/**')
  .pipe(size({
    showFiles: true,
  }));
});

// Task to get the size of the build project
gulp.task('build-size', function() {
  gulp.src('./dist/**')
  .pipe(size({
    showFiles: true,
  }));
});

// Serve application
gulp.task('serve', ['styles', 'html', 'scripts', 'jshint', 'images', 'size'], function() {
  /*browserSync.init({
    server: {
      baseDir: 'app',
    },
  });*/
});

// Run all Gulp tasks and serve application
gulp.task('default', ['serve', 'styles'], function() {
  gulp.watch('app/styles/*.css', ['styles']);
  gulp.watch('app/**', browserSync.reload);
  //gulp.watch('app/scripts/**/*.js', browserSync.reload);
});