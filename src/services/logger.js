const winston = require('winston')
const configs = require('../configs')

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const level = () => (configs.isDev ? 'debug' : 'warn')

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => {
    if (info.level == 'error') {
      return `${info.timestamp} [${info.level}] ${info}`
    }
    return `${info.timestamp} ${info.level}: ${info.message}`
  })
)

const transports = [new winston.transports.Console()]

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})

module.exports = logger
