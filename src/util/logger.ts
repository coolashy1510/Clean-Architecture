import { createLogger, transports, format } from 'winston';

// Gets the loglevel which is set as the process env variable
const logLevel = process.env.LOG_LEVEL;

/**
 * This module is intended for logger configuration of service.
 *
 * @author Rakhi Sasikumar (n516973)
 *
 * @param timestamp - the current timestamp
 * @param level - the log level refered in the logger line
 * @param message - the log message

 * @returns {logLine} - the generated logline.
 */
const customFormat = format.printf(({ timestamp, level, message }) => {
  // Reads defaultMeta from the logger which is set as the requestId in logline
  const metadata = JSON.stringify(logger.defaultMeta.awsRequestId);
  let logLine;
  if (metadata) {
    logLine = `[${timestamp}] ${level} ${metadata} ${message}`;
  } else {
    logLine = `[${timestamp}] ${level} ${message}`;
  }
  return logLine;
});

// Creates the logger object with required configuration
const logger = createLogger({
  level: logLevel,
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'error',
      filename: 'error.log',
      format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), customFormat)
    })
  ],
  format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), customFormat),
  defaultMeta: {} // Default value for defaultMeta
});

export default logger;
