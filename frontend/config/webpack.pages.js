const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template,
    filename,
    chunks,
  });
}

const htmlPages = [createPage("./src/index.html", "./index.html", ["index"])];

module.exports = htmlPages;
