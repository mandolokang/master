const express = require('express')

const app = express()
const http = require('./http')

http(app)

module.exports = app
