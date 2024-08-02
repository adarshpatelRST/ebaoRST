const winston = require('winston');
const Graylog2 = require('winston-graylog2');


// Configure the Graylog2 transport
const graylogOptions = {
  name: 'Graylog',
  level: 'info', // Log level (info, debug, error, etc.)
  silent: false,
  handleExceptions: true,
  graylog: {
    servers: [{ host: '192.168.56.1', port: 13102 }],
    hostname: 'RustyStick_Server', // The name of the host sending the logs
    facility: 'ebaoRST-POC', // The app name
    bufferSize: 1400
  },
  staticMeta: { env: 'production' } // Static metadata to attach to logs
};

// Create the logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: 'debug'
    }),
    new Graylog2(graylogOptions)
  ],
  exitOnError: false // Do not exit on handled exceptions
});

module.exports = logger;
