const babel = require("gulp-babel");           // Совместимость со старыми версиями Js
const webpack = require("webpack-stream");     // Сборка модулей

const js = () => {
  return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
    // .pipe(babel())                             // Обратная совместимость
    //  .pipe(webpack($.app.webpack))              // Сборка модулей
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = js;
