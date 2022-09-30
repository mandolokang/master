const joi = require('joi')
const { validationError } = require('../../../utils/customError')
const {
  responseSuccess,
  responseError,
} = require('../../../utils/responseJson')
const { listBookService } = require('../service')

module.exports = async function (req, res) {
  try {
    const query = await queryValidation(req, req.query)
    const storefronts = await listBookService(req, query)
    JSON.stringify(storefronts)
    return responseSuccess(res, storefronts)
  } catch (e) {
    return responseError(res, e)
  }
}

const queryRules = joi.object({
  sortby: joi
    .string()
    .valid('audit.createdAt', 'audit.updatedAt')
    .allow('', null),
  sortdir: joi.string().valid('asc', 'desc').allow('', null),
  limit: joi.number().integer().min(1).allow('', null),
  skip: joi.number().integer().min(0).allow('', null),
})

async function queryValidation(user, query) {
  try {
    const result = await queryRules.validateAsync(query, { stripUnknown: true })

    return result
  } catch (e) {
    throw validationError(e.details[0].message)
  }
}
