//const actions = require('../../client/actions');

const actions = {
  ADD_TICKER: 'ADD_TICKER',
  REMOVE_TICKER: 'REMOVE_TICKER',
};

module.exports = function socketHandler(server) {
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    socket.on('add ticker', symbol => {
      socket.broadcast.emit('add ticker', symbol);
    });

    socket.on('remove ticker', symbol => {
      socket.broadcast.emit('remove ticker', symbol);
    });
  });
};
