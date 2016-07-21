const app = require('express')();
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

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
