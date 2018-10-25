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

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const defaultMessage = `${ip} - ${req.method} ${req.url}`;
    const startTimeStamp = Date.now();
    const waitingTimePrintInterval = 5000;

    let waitingTime = 0;

    const intervalId = setInterval(() => {
        waitingTime += waitingTimePrintInterval;
        logger.warn(`${defaultMessage} - wait for ${waitingTime / 1000}s...`);
    }, waitingTimePrintInterval);

    const printExecutionTime = (statusCode = '') => {
        const message = `${defaultMessage} - ${statusCode} - ${(Date.now() - startTimeStamp) / 1000}s`;

        //TODO update how logging is done.
        if (res.statusCode < 400) {
            logger.info(message);
        } else {
            logger.warn(message);
        }
    };

    req.on('end', () => {
        clearInterval(intervalId);

        if (!req.isProxy) {
            printExecutionTime(res.statusCode);
        }
    })

    req.on('close', () => {
        clearInterval(intervalId);

        if (!req.isProxy) {
            printExecutionTime('')
        }
    })

}