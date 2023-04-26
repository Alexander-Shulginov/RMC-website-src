/* const fonts = () => {
  return $.gulp.src($.path.fonts.src)
    .pipe($.gp.plumber())                   // Обработка ошибок
    .pipe($.gp.newer($.path.fonts.dest))    // Проверка на уже сжатые файлы
    .pipe($.gp.ttf2woff())                  // Конвертация ttf в woff
    .pipe($.gulp.dest($.path.fonts.dest))
    .pipe($.gulp.src($.path.fonts.src))
    .pipe($.gp.newer($.path.img.dest))      // Проверка на уже сжатые файлы
    .pipe($.gp.ttf2woff2())                 // Конвертация ttf в woff2
    .pipe($.gulp.dest($.path.fonts.dest));
};
 
module.exports = fonts;
*/
const fonts = () => {
  return $.gulp.src($.path.fonts.src)
    .pipe($.gulp.dest($.path.fonts.dest));
};

module.exports = fonts;

// Так как конвертация и оптимизация производятся через он-лайн сервис, я отключил всю логику
// Сейчас файлы просто копируются из src в public