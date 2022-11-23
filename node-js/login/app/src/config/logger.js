'use strict';

const { createLogger, transports, format } = require('winston');
const { printf, combine, label, timestamp, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level }) => {
  return `${timestamp} [${label}] ${level}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: 'study back-end',
    }),
    // format.colorize(),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    printFormat
  ),
  console: combine(
    colorize(), //
    simple()
  ),
};

const opts = {
  file: new transports.File({
    filename: 'access.log',
    dirname: './logs',
    level: 'info',
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: 'info',
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV != 'production') {
  logger.add(opts.console);
}

module.exports = logger;
