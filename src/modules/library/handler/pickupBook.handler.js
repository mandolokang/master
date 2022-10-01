const joi = require('joi')
const { validationError } = require('../../../utils/customError')
const {
  responseError,
  responseSuccess,
} = require('../../../utils/responseJson')

const { pickUpBookService } = require('../service')
module.exports = async function (req, res) {
  try {
    const body = await bodyValidation(req.body)

    const customerPackage = await pickUpBookService(req, body)
    return responseSuccess(res, customerPackage)
  } catch (e) {
    return responseError(res, e)
  }
}
const bodyRules = joi.object({
  fullName: joi.string(),
  pickUpTime: joi.string(),
  bookingDetail: joi.array().items(
    joi.object({
      bookId: joi.string().required(),
      bookTitle: joi.string().required(),
      author: joi.string().required(),
      editionNumber: joi.string().required(),
    })
  ),
})
async function bodyValidation(body) {
  try {
    const result = await bodyRules.validateAsync(body, { stripUnknown: true })
    return result
  } catch (e) {
    throw validationError(String(e))
  }
}
