const { databaseError } = require('../../../utils/customError')
var userList = []
module.exports = async function (ctx, data) {
  const objToInsert = { ...data }

  try {
    if (data == null) {
      userList
    } else {
      userList.push(objToInsert)
    }
    return {
      userList,
    }
  } catch (e) {
    throw databaseError(e)
  }
}
