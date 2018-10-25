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
    `${timestamp} ${level}: ${typeof message === 'string' ? message : `\n ${jsonStringify(message, null, 4)}`}`),
];

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                ...defaultFormats
            ),
            level: process.env.LOG_LEVEL_CONSOLE,
            handleException: true,
        }),
        new winston.transports.File({
            format: winston.format.combine(
                winston.format.colorize(),
                ...defaultFormats
            ),
            level: process.env.LOG_LEVEL_FILE,
            filename: LOG_FILE_PATH,
            handleException: true,
            tailable: true,
            maxsize: 10 * 1024 * 1024,
            maxFiles: 5,
        }),
    ]
});


logger.expressMiddleware = (req, res, next) => {
    // hot-reload url to skip for logging purposes

    if (req.url.includes('__webpack') && process.env.NODE_ENV === 'development') {
        return next();
    }

    const ip = req.headers()
}