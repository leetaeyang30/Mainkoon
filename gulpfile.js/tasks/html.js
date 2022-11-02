const {src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");
const webpHtml = require('gulp-webp-html');
const gulpif = require("gulp-if");

const html = () => {
    return src(path.html.src)
    .pipe(plumber())
    .pipe(dest(path.html.dest))
}

module.exports = html;

//     .pipe(webpHtml())
//     .pipe(gulpif(app.isProd, htmlmin(app.htmlmin)))