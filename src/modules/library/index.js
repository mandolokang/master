const express = require('express')
const mobileLogin = require('./mobileLogin')

module.exports = function (app) {
  const groupPath = `/auth`
  const RouterUser = express.Router()
  RouterUser.use(express.json())

  RouterUser.post('/login-search', mobileLoginSearch)

  RouterUser.use(unknownEndpoint)
  app.use(`/v1/customer${groupPath}`, RouterUser)

  const RouterAdmin = express.Router()
  RouterAdmin.use(express.json())

  RouterAdmin.post('/login', login)

  RouterAdmin.use(unknownEndpoint)
  app.use(`/v1/admin${groupPath}`, RouterAdmin)
}
