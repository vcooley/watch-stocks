const express = require('express');
const path = require('path');
const errorHandler = require('errorhandler');
const compression = require('compression');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const config = require('./environment.js');

module.exports = app => {
  const env = app.get('env');
  const root = config.root;
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  if (env === 'production') {
    app.use(favicon(path.join(root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(root, 'public'), { maxAge: 1000 * 3600 * 2 }));
    app.set('appPath', path.join(root, 'public'));
  }

  if (env === 'development' || env === 'test') {
    // TODO: Get this working with webpack
    // app.use(express.static(path.join(root, 'client')))
    app.use(express.static(path.join(root, '/dist/public')));
    app.set('appPath', path.join(root, 'client'));
    app.use(errorHandler());
  }
  return app;
};
