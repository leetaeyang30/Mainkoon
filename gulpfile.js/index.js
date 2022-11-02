const {watch, series, parallel, src, dest} = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");
const app = require("./config/app.js");

const html = require("./tasks/html.js");
const clear = require("./tasks/clear.js");
const style = require("./tasks/style.js");
const js = require("./tasks/script.js");
const image = require("./tasks/image.js");
const fonts = require("./tasks/fonts.js");
const copysvg = require("./tasks/copysvg.js");

// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.style.watch, series(style)).on("change", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, image).on("all", browserSync.reload);
  watch(path.fonts.watch, fonts).on("all", browserSync.reload);
}

// Задачи
exports.watch = watcher;
exports.html = html;
exports.style = style;
exports.js = js;
exports.image = image;
exports.fonts = fonts;
exports.copysvg = copysvg;

const copy = (done) => {
  src([
    `${path.global.src}/*.ico`,
    `!${path.global.src}/img/icons/*.svg`,
    `${path.global.src}/manifest.webmanifest`
  ], {
    base: `${path.global.src}`
  })
    .pipe(dest(`${path.root}`))
  done();
}

const copyImages = () => {
  return src(`${path.img.src}`)
    .pipe(dest(`${path.img.dest}`))
}

// Сервер
const server = () => {
  browserSync.init({
    server : {
      baseDir: path.root,
    }
  })
}

const build = series(
  clear,
  copy,
  parallel(html, style, js, image, fonts, copysvg),
);

const dev = series(
  clear,
  copy,
  copyImages,
  parallel(html, style, js, fonts),
  parallel(watcher, server)
);

// Сборка
exports.default = app.isProd ? build : dev;