const del = require("del");

const clear = () => {
  // return del($.path.root)        // Удаление директории public
  return del(["./public/css", "./public/js", "./public/index.html", "./public/icons"])
}

module.exports = clear;