const adminRepository = require('../repository')

module.exports = async function (ctx, args) {
  try {
    const res = await adminRepository.pickUpBookRepository(ctx, null)

    return {
      admin: res.userList,
    }
  } catch (e) {
    throw e
  }
}
