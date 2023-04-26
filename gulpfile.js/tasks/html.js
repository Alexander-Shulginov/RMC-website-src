const html = () => {
  return $.gulp.src($.path.html.src)
    .pipe($.gp.plumber())                             // Обработака ошибок
    .pipe($.gp.fileInclude())                         // Шаблонизатор
    //.pipe($.gp.avifWebpHtml())                        // Генерирует <picture> + avif, webp
    .pipe($.gp.size($.app.size.before_value))         // Размер До 
    //.pipe($.gp.htmlmin($.app.htmlmin))              // Минификация + Удаление пробелов
    .pipe($.gp.size($.app.size.after_value))          // Размер После
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());                    // stream() обновляет данные без перезагрузки страницы
};

module.exports = html;                                // Экспорт наружу
