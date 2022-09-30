const axios = require('axios')

module.exports = async function (ctx, args) {
  try {
    let res = await axios('http://openlibrary.org/subjects/love.json')

    return {
      book: res.data,
    }
  } catch (e) {
    throw e
  }
}
