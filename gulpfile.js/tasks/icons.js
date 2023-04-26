const icons = () => {
	return (
		$.gulp
			.src($.path.sprite.src)
			.pipe($.gulp.dest($.path.icons.dest))
			//* Обработка ошибок
			.pipe($.gp.plumber())
			//* Отслеживание только новых файлов
			.pipe($.gp.newer($.path.sprite.dest))
			.pipe($.gp.svgo()) // Оптимизация
			//* Удаление fill, stroke, style
			// .pipe($.gp.cheerio($.app.cheerio))
			//* Создание svg спрайта
			.pipe($.gp.svgSprite($.app.sprite))
			.pipe($.gulp.dest($.path.sprite.dest))
			//* Копирование favicon в public
			.pipe($.gulp.src($.path.icons.src_favicon))
			.pipe($.gulp.dest($.path.icons.dest_favicon))
			.pipe($.browserSync.stream())
	);
};

module.exports = icons;
