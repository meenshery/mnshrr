const path = require("path");
const htmlPages = require("./webpack.pages.js");

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../docs"),
    clean: true,
  },

  plugins: [...htmlPages],
};
