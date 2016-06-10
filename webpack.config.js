const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/client/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname, '/dist/public'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};
