const path = require('path');

module.exports = app => {
  app.use('/api/room', require('./api/room'));
  app.use('/api/stock', require('./api/stock'));

  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath')));
    });

  return app;
};
