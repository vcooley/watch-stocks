const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const Room = require('./api/room/room.model');
const config = require('./config');

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

require('./config/express')(app);
require('./routes')(app);

io.on('connection', socket => {
  socket.on('add stock', data => {
    socket.broadcast.emit('add stock', {
      symbol: data.symbol,
    });
  });

  socket.on('remove stock', data => {
    socket.broadcast.emit('remove stock', {
      symbol: data.symbol,
    });
  });
});

server.listen(config.port, config.ip, () => {
  console.log(
    `Express server listening on ${config.port} in ${app.get('env')} mode`
  );
});

module.exports = app;
