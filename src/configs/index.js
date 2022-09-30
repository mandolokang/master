require('dotenv').config()

function getConfig() {
  const configs = {
    // eslint-disable-next-line no-unneeded-ternary
    devBaseURL: process.env.DEV_BASEURL,
    isDev:
      // eslint-disable-next-line no-unneeded-ternary
      process.env.NODE_ENV === 'dev' ? true : false,
    port: parseInt(process.env.PORT, 10) || 3001,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpireInMinute: process.env.JWT_EXPIRE,
  }

  return configs
}

const configClient = getConfig()

module.exports = configClient
