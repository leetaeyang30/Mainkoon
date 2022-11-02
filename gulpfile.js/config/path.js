const pathSrc = "./source";
const pathDest = "./build";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/*.html",
    watch: pathSrc + "/*.html",
    dest: pathDest,
  },
  style: {
    src: pathSrc + "/sass/*.scss",
    watch: pathSrc + "/sass/**/*.scss",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/*.js",
    dest: pathDest + "/js",
  },
  img: {
    src: pathSrc + "/img/**/*.{jpeg,jpg,png,svg}",
    watch: pathSrc + "/img/**/*.{jpeg,jpg,png,svg}",
    dest: pathDest + "/img",
  },
  fonts: {
    src: pathSrc + "/fonts/*.{ttf,otf,otc,svg}",
    watch: pathSrc + "/fonts/*.{ttf,otf,otc,svg}",
    dest: pathDest + "/fonts",
  },
  svg: {
    src: pathSrc + "/img/**/*.svg",
    watch: pathSrc + "/img/**/*.svg" ,
    dest: pathDest + "/img"
  },
  global: {
    src: pathSrc
  }
};
