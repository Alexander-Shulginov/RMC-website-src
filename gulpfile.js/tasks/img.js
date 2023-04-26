// const gulpif = require("gulp-if");
const imagemin = require("gulp-imagemin");

const img = async () => {
	return await $.gulp
		.src($.path.img.src)
		//* Не сжимает уже сжатые изображения
		.pipe($.gp.newer($.path.img.dest))
		//* сжатие png и jpg
		// .pipe($.gp.imagemin([imagemin.mozjpeg($.app.imagemin.jpgQuality), imagemin.optipng($.app.imagemin.pngQuality)], $.app.imagemin))
		//* копируем исходники в конечную папку
		// .pipe($.gulp.dest($.path.img.dest))
		//* увеличиваем размер в х2 и х3 раза, добавляет префиксы
		// .pipe($.gp.responsiveImages($.app.optionsResponsive))
		// .pipe($.gp.webp($.app.imagemin.webpQuality))
		//* раскомментировать если нужен формат avif + сжатие
		// .pipe($.gp.avif($.app.imagemin.avifQuality))
		// .pipe($.gulp.dest($.path.img.dest))
		// .pipe($.gulp.src($.path.img.src))
		//* увеличиваем размер в х2 и х3 раза, добавляет префиксы
		//* конвертируем в webp + сжатие
		.pipe($.gp.webp($.app.imagemin.webpQuality))
		// .pipe($.gp.responsiveImages($.app.optionsResponsive))
		.pipe($.gulp.dest($.path.img.dest))
		.pipe($.browserSync.stream());
};

module.exports = img;
