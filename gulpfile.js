const sync = require("browser-sync").create();
const gulp = require("gulp");
const plumber = require("gulp-plumber");
// const del = require("del");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sass = require("gulp-sass")(require('sass'));


const styles = () => {
  return gulp.src("source/sass/style.scss", {sourcemaps: true})
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]
  ))
  .pipe(gulp.dest("source/css", {sourcemaps: true}))
  .pipe(sync.stream());
}

exports.styles = styles;

const reload = (done) => {
  sync.reload();
  done();
}

// const clear = () => {
//   return del("build");
// }

const server = () => {
  sync.init({
    server: {
      baseDir: "./source"
    }
  }
  );
}

exports.server = server;

const watcher = () => {
  gulp.watch("source/*.html").on("change", sync.reload);
  gulp.watch("source/sass/*/*.scss", gulp.series("styles"));
  // gulp.watch("source/js/*.js", task);
}

exports.watch = watcher;

exports.dev = gulp.series(
  styles,
  gulp.parallel(watcher, server)
);
