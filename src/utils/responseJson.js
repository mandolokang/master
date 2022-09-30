module.exports = {
  responseSuccess: function (res, data) {
    return res.status(200).json({
      code: 200,
      success: true,
      payload: data,
    })
  },
  responseError: function (res, err) {
    if (err) {
      switch (err.name) {
        case 'BadRequestError':
          return res.status(400).json({
            code: err.code,
            success: false,
            error: {
              name: err.name,
              message: err.message,
            },
          })
        case 'ValidationError':
          return res.status(400).json({
            code: err.code,
            success: false,
            error: {
              name: err.name,
              message: err.message,
            },
          })
        case 'UnauthorizedError':
          return res.status(401).json({
            code: err.code,
            success: false,
            error: {
              name: err.name,
              message: err.message,
            },
          })
        case 'ForbiddenError':
          return res.status(403).json({
            code: err.code,
            success: false,
            error: {
              name: err.name,
              message: err.message,
            },
          })
        case 'NotFoundError':
          return res.status(404).json({
            code: err.code,
            success: false,
            error: {
              name: err.name,
              message: err.message,
            },
          })
        default:
          console.log(err)
          delete err.message
          return res.status(500).json({
            code: err.code,
            success: false,
            error: {
              name: err.name,
              message: err.message,
            },
          })
      }
    }
  },
}
