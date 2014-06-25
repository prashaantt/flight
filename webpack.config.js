var BannerPlugin = require("webpack/lib/BannerPlugin");
var version = require('./package.json').version;
var webpack = require("webpack");

module.exports = {
  entry: "./index",
  output: {
    path: __dirname + "/build",
    filename: "flight.js",
    library: 'flight',
    libraryTarget: 'umd'
  },
  plugins: [
    new BannerPlugin('Flight v' + version + ' | (c) Twitter, Inc. | MIT License')
  ]
};
