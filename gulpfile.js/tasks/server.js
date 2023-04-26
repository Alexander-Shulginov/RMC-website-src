const server = () => {
  $.browserSync.init({
    server: {
      baseDir: $.path.root, //путь к транслируемому файлу, который будет отображет в браузере
    },
  });
};

module.exports = server;