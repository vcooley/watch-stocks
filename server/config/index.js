let local;
try {
  local = require('./local.env.js');
} catch (err) {
  local = {
    ip: process.env.IP,
    port: process.env.PORT,
    domain: process.env.DOMAIN,
    root: path.normalize(`${__dirname} + '/../..`),
    mongo: {
      uri: 'mongodb://localhost/watch-stocks',
      options: {},
    },
    quandlApiKey: process.env.QUANDL_API_KEY,
  }
}

module.exports = local;
