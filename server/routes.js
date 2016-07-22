const path = require('path');

module.exports = app => {
  app.use('/api/rooms', require('./api/room'));
  app.use('/api/stocks', require('./api/stock'));

  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath')));
    });

  return app;
};
