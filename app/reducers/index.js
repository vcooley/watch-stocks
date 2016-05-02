const combineReducers = require('redux').combineReducers;
const tickers = require('./tickers');

const stockApp = combineReducers({ tickers });

module.exports = stockApp;
