const express = require('express')
const bookListHandler = require('./handler/listBook.handler')
const bookScheduleHandler = require('./handler/pickupBook.handler')
const pickupScheduleHandler = require('./handler/listPickUpSchedule.handler')

module.exports = function (app) {
  const groupPath = `/library`
  const RouterUser = express.Router()
  RouterUser.use(express.json())

  RouterUser.get('/book-list', bookListHandler)
  RouterUser.post('/book-schedule', bookScheduleHandler)

  app.use(`/v1/customer${groupPath}`, RouterUser)

  const RouterAdmin = express.Router()
  RouterAdmin.use(express.json())
  RouterAdmin.get('/pickup-schedule-list', pickupScheduleHandler)

  app.use(`/v1/admin${groupPath}`, RouterAdmin)
}
