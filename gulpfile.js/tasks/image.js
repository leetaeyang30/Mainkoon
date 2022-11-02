const {src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require("gulp-if");




const image = () => {
  return src([path.img.src, `!${path.img.src}/favicons`])
  .pipe(plumber())
  .pipe(newer(path.img.dest))
  .pipe(gulpif(app.isProd, webp()))
  .pipe(dest(path.img.dest))
  .pipe(src(path.img.src))
  .pipe(newer(path.img.dest))
  .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
  .pipe(dest(path.img.dest))
}

module.exports = image;