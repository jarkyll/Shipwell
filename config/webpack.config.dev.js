const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const baseConfig = require('./webpack.config.base');

console.log(resolve(__dirname, '../public/index.html'));
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    `webpack-hot-middleware/client?http://localhost:${
      process.env.HTTP_PORT
    }&reload=true`,
  ],
  output: {
    hotUpdateMainFilename: 'hot-update.[hash:6].json',
    hotUpdateChunkFilename: 'hot-update.[hash:6].js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, '../public/index.html'),
      filename: resolve(__dirname, '../build/index.html')
      // favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),
    })
  ],
});