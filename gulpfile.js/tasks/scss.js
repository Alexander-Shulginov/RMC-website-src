const sass = require("gulp-sass")(require("sass"));

const scss = () => {
  return $.gulp
    .src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.sassGlob())                            // Маска для глобального подкл. файлов
    .pipe(sass())                                     // Компилятор
    //.pipe($.gp.webpCss())                             // Генерирует webp в .css файл
    .pipe($.gp.plumber())                             // Обработка ошибок
    .pipe($.gp.autoprefixer())                        // Авто-префиксер
    .pipe($.gp.groupCssMediaQueries())                // Группировка медиа-выражений
    .pipe($.gp.size( $.app.size.before_value ))       // Размер До сжатия
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.rename({ suffix: ".min" }))            // Минифицированная версия .css файла
    .pipe($.gp.cleanCss())
    .pipe($.gp.size( $.app.size.after_value ))        // Размер После сжатия
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = scss;

// Gulp плагин webpCss некорректно работает в ситуациях когда необходимо задать несколько фоновых изображений, плагин конвертирует только первое изображение, расположенные ниже изображения отображаются в исходных форматах