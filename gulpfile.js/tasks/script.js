const {src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");


const js = () => {
  return src(path.js.src)
  .pipe(plumber())
  .pipe(webpack(app.webpack))
  .pipe(rename({
    "suffix" : ".min",
  }))
  .pipe(dest(path.js.dest, app.sourcemap))
}

module.exports = js;