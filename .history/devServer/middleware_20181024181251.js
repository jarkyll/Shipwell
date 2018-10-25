const fs = require('fs-extra');
const mustache = require('mustache');
const config = require('config');
const path = require('path');

// webpack configs
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../config/webpack.config.dev');
const logger = require('../logger');

// const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer();

const compiler = webpack(webpackConfig);

// middleware modules
const channel = require('./channel');
const { fetchFooter, fetchHeader } = require('./hfapp');
const hmac = require('./hmac');

// middleware configs
const contextPath = config.get('paths.context');
const profile = config.get('profile');
const secureHostName = config.get(`hosts.${profile}.secure`);
const nonSecureHostName = config.get(`hosts.${profile}.non-secure`);
const customerApiContext = config.get('paths.customerApiContext');
const ordersApiContext = config.get('paths.ordersApiContext');
const ensighten = config.get('ensighten');

module.exports = (app, proxy) {
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

  // channel detection
  app.use(channel());

  // fetch hfapp and hmac
  if (config.get('hfapp.fetch')) {
    app.use(fetchHeader());
    app.use(fetchFooter());
  }
  app.use(hmac());

  // all other requests be handled by UI itself
  app.get(`${contextPath}/*`, (req, res) => {
    const templateFile = path.join(__dirname, '../../build-dev/index.html');
    fs.readFile(templateFile, (err, data) => {
      const content = data.toString();
      const isMobile = req.headers['user-agent'].includes('Mobile');
      const ensightenURL = isMobile ? ensighten.mobile : ensighten.desktop;
      const values = {
        header: config.get('hfapp.fetch') ? res.locals.hfHeader.html : null,
        footer: config.get('hfapp.fetch') ? res.locals.hfFooter.html : null,
        hmacAuthToken: res.locals.hmac.token,
        hmacClientId: res.locals.hmac.clientId,
        hmacTimestamp: res.locals.hmac.timestamp,
        isMobile,
        channel: isMobile ? '2' : '1',
        client: isMobile ? 'mobile' : 'web',
        secureHostName,
        ensightenURL,
      };

      const finalHTML = mustache.to_html(content, values);
      res.send(finalHTML);
    });
  });

  // TODO window.location.href to be used for target
  const options = {
    target: 'https://secure.hd-qa74.homedepotdev.com',
    secure: false,
    ws: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res, options) => {
      if (req.body) {
        let bodyData = JSON.stringify(req.body);
        // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
      }
    },
  };

  app.use(proxy('/customer/account/v1/*', options));
};