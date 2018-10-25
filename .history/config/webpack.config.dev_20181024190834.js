const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('hi2')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const baseConfig = require('./webpack.config.base');
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [],
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
      // favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: resolve(__dirname, '../build-dev'),
    }),
  ],
});