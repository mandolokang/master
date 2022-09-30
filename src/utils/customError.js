function badRequestError(message) {
  return {
    name: 'BadRequestError',
    code: 400,
    message,
  }
}

function validationError(message) {
  return {
    name: 'ValidationError',
    code: 400,
    message,
  }
}

function unauthorizedError(message) {
  return {
    name: 'UnauthorizedError',
    code: 401,
    message,
  }
}

function forbiddenError(message) {
  return {
    name: 'ForbiddenError',
    code: 403,
    message,
  }
}

function notFoundError(message) {
  return {
    name: 'NotFoundError',
    code: 404,
    message,
  }
}

function internalError(message) {
  return {
    name: 'InternalError',
    code: 500,
    message,
  }
}

function databaseError(message) {
  return {
    name: 'DatabaseError',
    code: 500,
    message,
  }
}

module.exports = {
  badRequestError,
  validationError,
  unauthorizedError,
  forbiddenError,
  notFoundError,
  internalError,
  databaseError,
}
