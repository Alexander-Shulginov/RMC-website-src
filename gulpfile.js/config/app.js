const isProd = process.argv.includes("--production"); // Проверка режима в котором запускаются задачи
const isDev = !isProd;
module.exports = {
	isProd: isProd,
	isDev: isDev,

	htmlmin: {
		collapseWhitespace: isProd, //Минификация HTML, удаляет все лишние пробелы
	},

	size: {
		before_value: "Before resize:",
		after_value: "After resize",
	},

	webpack: {
		mode: isProd ? "production" : "development", // Минификация Js
	},

	imagemin: {
		verbose: true, // Размер изображения До и После
		progressive: true,

		pngQuality: {
			optimizationLevel: 5,
		},

		jpgQuality: {
			quality: 90,
			progressive: true,
		},

		webpQuality: {
			quality: 100,
		},

		avifQuality: {
			quality: 85,
		},
	},

	sprite: {
		// Создание единого спрайта + .scss файл ??
		mode: {
			symbol: {
				sprite: "../sprite.svg", // Директория  и название для готового спрайта
			},
		},
	},

	cheerio: {
		run: function ($) {
			$("[fill]").removeAttr("fill");
			$("[stroke]").removeAttr("stroke");
			$("[style]").removeAttr("style");
		},
		parserOptions: { xmlMode: true },
	},

	optionsResponsive: {
		"**/*": [
			{
				width: "100%",
			},
			{
				width: "200%",
				rename: { suffix: "@2x" },
			},
			{
				width: "300%",
				rename: { suffix: "@3x" },
			},
		],
	},
};
