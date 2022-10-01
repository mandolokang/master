const express = require('express')
const bookListHandler = require('./handler/listBook.handler')

module.exports = function (app) {
  const groupPath = `/library`
  const RouterUser = express.Router()
  RouterUser.use(express.json())

  RouterUser.get('/book-list', bookListHandler)

  app.use(`/v1/customer${groupPath}`, RouterUser)

  const RouterAdmin = express.Router()
  RouterAdmin.use(express.json())

  app.use(`/v1/admin${groupPath}`, RouterAdmin)
}
