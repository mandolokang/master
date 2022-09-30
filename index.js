const http = require('http')
const app = require('./src/app')
const configs = require('./src/configs')

const server = http.createServer(app)

console.log(`Running express on port ${configs.port}`)
server.listen(configs.port)
