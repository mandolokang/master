const { v4: uuid } = require('uuid')

const { pickUpBookRepository } = require('../repository')

module.exports = async function (ctx, data) {
  try {
    const id = uuid()

    let insertedCustomer

    const customer = await pickUpBookRepository(ctx, {
      ...data,
      _id: id,
      dataStatus: 1,
    })

    insertedCustomer = {
      ...customer,
    }
    return {
      insertedCustomer: insertedCustomer,
    }
  } catch (e) {
    throw e
  }
}
