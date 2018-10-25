const path = require('path');
const { homedir } = require('os');
const winston = require('winston');
const jsonStringify = require('fast-safe-stringify');


// LOG FILE DESTINATION
const LOG_FILE_NAME = ".app.log";
const LOG_FILE_PATH =
    process.env.NODE_ENV === 'production' 
    ? path.join(homedir(), LOG_FILE_NAME)
    : path.join(homedir(), LOG_FILE_NAME);


const defaultFormats = [
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => 
    `${timestamp} ${level}: ${typeof message === 'string' ? message : `\n`}`
]