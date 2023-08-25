"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const concat = require('gulp-concat');
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
var sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload');
const notify = require('gulp-notify');
var reload = browsersync.reload;



// == Browser-sync task
gulp.task("browser-sync", function(done){
  browsersync.init({
    server: "",
    startPath: "src/index.html", // After it browser running [File path set]
    //    browser: 'chrome',
    host: 'localhost',
    //    port: 4000,
    open: true,
    tunnel: true 
  });
  gulp.watch(["dist/*.html"]).on("change", reload); // [File path set]
  done(); 
});
// == Browser-sync task

//HTML task
gulp.task("html", () => {
  return gulp
    .src("src/index.html")
    .pipe(gulp.dest("dist"))
});


// CSS task
gulp.task("css", () => {
  return gulp
    .src("src/assets/scss/app.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(notify({
          message: "main SCSS processed"
    }))
    .pipe(browsersync.stream())
    .pipe(livereload())
});

// Webfonts task
gulp.task("webfonts", () => {
  return gulp
    .src("assets/scss/vendor/fontawesome/webfonts/*.{ttf,woff,woff2,eot,svg}")
    .pipe(gulp.dest('./dist/assets/css/webfonts'));
});

// Transpile, concatenate and minify scripts
gulp.task("js", () => {
  return (
    gulp
      .src([
      'src/assets/js/jquery-3.6.0.min.js',      
      'src/assets/js/popper.min.js', 
      'src/assets/js/bootstrap.min.js',
      'src/assets/js/select2.min.js',
      'src/assets/js/general.js'
    ])
      .pipe(plumber())

      // folder only, filename is specified in webpack config
      .pipe(concat('app.js'))
      .pipe(gulp.dest("dist/assets/js"))
      .pipe(browsersync.stream())
      .pipe(livereload())
  );
});

gulp.task("default", gulp.series( "html", "css", "js", "webfonts", "browser-sync", () => {
  livereload.listen();
  gulp.watch(["src/*"], gulp.series("html"));  
  gulp.watch(["src/assets/scss/**/*"], gulp.series("css"));
  gulp.watch(["src/assets/js/**/*"], gulp.series("js"));
  gulp.watch(["src/assets/scss/vendor/fontawesome/webfonts/*"], gulp.series("webfonts"));
}));





