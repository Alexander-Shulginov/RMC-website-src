const path_src = "./src";
const path_dest = "./public";

module.exports = {
	root: path_dest,

	html: {
		src: path_src + "/template/*.html",
		watch: path_src + "/template/**/*.html",
		dest: path_dest + "/",
	},

	js: {
		src: path_src + "/js/**/*.js",
		watch: path_src + "/js/**/*.js",
		dest: path_dest + "/js",
	},

	scss: {
		src: path_src + "/scss/**/*.{scss,sass}",
		watch: path_src + "/**/*.{scss,sass}", // <-- watching all .scss files in project
		dest: path_dest + "/css",
	},

	icons: {
		src: path_src + "/icons/**/*",
		dest: path_dest + "/icons/",
		src_favicon: path_src + "/icons/favicon/*",
		dest_favicon: path_dest + "/icons/favicon/",
	},

	sprite: {
		src: path_src + "/icons/*.svg",
		watch: path_src + "/icons/*.svg",
		dest: path_dest + "/icons/svg_sprite",
	},

	img: {
		src: path_src + "/img/**/*.{png,jpg,jpeg,gif,svg}",
		watch: path_src + "/img/**/*.{png,jpg,jpeg,gif,svg}",
		dest: path_dest + "/img/",
	},

	fonts: {
		src: path_src + "/fonts/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}",
		watch: path_src + "/fonts/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}",
		dest: path_dest + "/fonts",
	},

	copy: {
		icons: {
			src: path_src + "/icons/**/*",
		},
		src: {
			favicon: path_src + "/icons/favicon/*",
			icons: path_src + "/icons/*.svg",
		},
		dest: {
			dest_favicon: path_dest + "/icons/favicon",
			dest_icons: path_dest + "/icons",
		},
	},
};
