const cors = require('cors')
const morgan = require('morgan')
const requestIp = require('request-ip')
const configs = require('../../configs')
const routes = require('./routes')
//const middlewareDb = require('./middlewares/database')
//const { logger } = require('../../services')

module.exports = function (app) {
  if (configs.isDev) {
    app.use(
      morgan('tiny', {
        stream: {
          write: (message) => logger.http(message),
        },
      })
    )
  }

  const corsMw = cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Credentials'],
  })

  app.disable('x-powered-by')
  app.disable('etag')
  app.use(requestIp.mw())
  app.use(corsMw)

  //app.use(middlewareDb)

  routes(app)

  app.get('/', (req, res) => {
    res.end('OK test-Joy-nodejs')
  })
}
