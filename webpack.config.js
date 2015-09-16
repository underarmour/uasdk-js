var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, './dist/'),
    filename: "uasdk.js",
    library: "sdk",
    libraryTarget: "amd"
  }
};
