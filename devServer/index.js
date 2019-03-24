const http = require('http');
const proxy = require('http-proxy-middleware');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('./logger');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 8080;


const onUnhandledError = (err) => {
    try {
        logger.error(JSON.stringify(err));
    } catch (e) {
        console.log('LOGGER ERROR: ', e); // eslint-disable-line no-console
        console.log('APPLICATION ERROR: ', err); // eslint-disable-line no-console  
    }

    process.exit(1);
};

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const app = express();


// Logger
app.set('env', process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);
app.use(logger.expressMiddleware);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Helmet Security
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: `sameorigin` }));
app.use(helmet.noCache());

// Application Routes
require('./middlewares')(app);

// // Start the SSE

// const server = http.createClient(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okay');
// });


// server.listen(9000, '127.0.0.1', function () {
//     var sse = new SSE(server);
//     sse.on('connection', function (client) {
//         client.send('hi there!');
//     });
// });

http.createServer(app).listen(process.env.HTTP_PORT, () => {
    logger.info(`Server is now running on port: ${process.env.HTTP_PORT}`);
})

