const fs = require('fs-extra');
const mustache = require('mustache');
const config = require('config');
const path = require('path');
const http = require('http');
const sse = require('sse');

// webpack configs
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../config/webpack.config.dev');
const logger = require('../logger');

const compiler = webpack(webpackConfig);

module.exports = (app, proxy) => {
  // set up webpack middlewares

  app.use(
    webpackDevMiddleware(compiler, {
      logger,
      logLevel: 'silent',
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        chunks: false,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
      },
    })
  );
  app.use(webpackHotMiddleware(compiler));

  // Routing to fetch app
  app.get(`/*`, (req, res) => {
    const templateFile = path.join(__dirname, '../../build/index.html');


    fs.readFile(templateFile, (err, data) => {
      const content = data.toString();
      const values = {};
      const finalHTML = mustache.to_html(content, values);
      res.send(finalHTML);
    });
  });
};