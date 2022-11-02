const {src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));

const style = () => {
  return src(path.style.src, app.sourcemap)
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(dest(path.style.dest, app.sourcemap))
  .pipe(rename({
    "suffix" : ".min",
  }))
  .pipe(csso())
  .pipe(dest(path.style.dest, app.sourcemap))
}

module.exports = style;
