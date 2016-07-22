'use strict';

const app = require('express')();
const config = require('./config');

require('./config/express')(app);
require('./routes')(app);

const server = require('http').Server(app);
require('./config/socket')(server);

server.listen(config.port, config.ip, () => {
  console.log(
    `Express server listening on ${config.port} in ${app.get('env')} mode`
  );
});

module.exports = app;
