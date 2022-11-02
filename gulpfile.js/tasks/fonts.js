const {src, dest, task} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const fonts = () => {
  return src(path.fonts.src)
  .pipe(plumber())
  .pipe(newer(path.fonts.dest))
  .pipe(fonter(app.fonter))
  .pipe(dest(path.fonts.dest))
  .pipe(src(path.fonts.src))
  .pipe(ttf2woff2())
  .pipe(dest(path.fonts.dest))
}

module.exports = fonts;