// Глобальная переменная с загрузкой необходимых модулей
global.$ = {
	// Глобальный объект свойства которого доступны в любом модуле
	gulp: require("gulp"),
	gp: require("gulp-load-plugins")(), // Использует все пакеты из package.json
	browserSync: require("browser-sync").create(), //Метод create() создает экземпляр сервера

	path: require("./config/path.js"),
	app: require("./config/app.js"),
};

// Плагин для работы со всеми тасками разбитыми на файлы
const requireDir = require("require-dir");
const task = requireDir("./tasks", { recurse: true });

const watcher = () => {
	$.gulp.watch($.path.html.watch, task.html);
	$.gulp.watch($.path.scss.watch, task.scss);
	$.gulp.watch($.path.js.watch, task.js);
	$.gulp.watch($.path.img.watch, task.img);
	$.gulp.watch($.path.fonts.watch, task.fonts);
	$.gulp.watch($.path.sprite.watch, task.icons);
};

// Production build
const build = $.gulp.series(task.clear, $.gulp.parallel(task.html, task.scss, task.icons, task.img, task.fonts, task.js));
// Изменен fonts.js так как конвертация и оптимизация шрифтов производится через сервис - fontsquirrel

// Development build
const dev = $.gulp.series(build, $.gulp.parallel(watcher, task.server));

// для запуска отдельных задач gulp html, gulp scss и т.д.
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.fonts = task.fonts;
exports.icons = task.icons;
exports.clear = task.clear;

exports.default = $.app.isProd ? build : dev;
// команда gulp запустит сборку в режиме Development
// команда gulp --production запустит сборку в режиме Production
