let tickers = [];

module.exports = function socketHandler(server) {
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    socket.emit('initial tickers', tickers);

    socket.on('add ticker', symbol => {
      tickers = tickers.filter(ticker => ticker !== symbol);
      tickers.push(symbol);
      socket.broadcast.emit('add ticker', symbol);
    });

    socket.on('remove ticker', symbol => {
      tickers = tickers.filter(ticker => ticker !== symbol);
      socket.broadcast.emit('remove ticker', symbol);
    });
  });
};
