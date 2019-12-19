const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
    format: winston.format.combine(
        // winston.format.colorize({ level: true }),
        winston.format.prettyPrint()
    ),
    // levels: winston.config.npm.levels,
    transports: [
        new winston.transports.File({ filename: path.join(__dirname + '/www/log/info.log'), options: { flags: 'w' } }),
        // new winston.transports.Console()

    ],
    // exceptionHandlers: [
    //     new winston.transports.File({ filename: path.join(__dirname + '/www/log/info.log'), options: { flags: 'w' } }),
    //     // new winston.transports.Console(),
    // ],
    exitOnError: false
});

const log = function () { logger.info(arguments[0]); };
const error = function () { logger.error(arguments[0]); };
const warn = function () { logger.warn(arguments[0]); };

module.exports = {
    log,
    error,
    warn
};