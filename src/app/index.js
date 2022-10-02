const express = require('express')

const app = express()
const http = require('./http/routes')

http(app)

module.exports = app
