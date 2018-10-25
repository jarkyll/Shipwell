const http = require('http');
const proxy = require('http-proxy-middleware');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('./logger');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 8081;


const onUnhandledError = (err) => {
    try {
        logger.error(err);
    } catch (e) {
        console.log('LOGGER ERROR: ', e); // eslint-disable-line no-console
        console.log('APPLICATION ERROR: ', err); // eslint-disable-line no-console  
    }

    process.exit(1);
};

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException')