import fetch from 'isomorphic-fetch'

let nextTicker = 0;

export const ADD_TICKER = 'ADD_TICKER';
export function addTicker(symbol) {
  return {
    type: ADD_TICKER,
    id: nextTicker++,
    symbol,
  };
}

export const REQUEST_STOCK_DATA = 'REQUEST_STOCK_DATA';
export function requestStockData(symbol) {
  return {
    type: REQUEST_STOCK_DATA,
    symbol,
  };
}

export const RECIEVE_STOCK_DATA = 'RECIEVE_STOCK_DATA';
export function recieveStockData(symbol, json) {
  return {
    type: RECIEVE_STOCK_DATA,
    symbol,
    chartData: json,
    receivedAt: Date.now(),
  };
}

export const REMOVE_TICKER = 'REMOVE_TICKER';
export function removeTicker(id) {
  return {
    type: REMOVE_TICKER,
    id,
  };
}

export const INVALIDATE_TICKER = 'INVALIDATE_TICKER';
export function invalidateTicker(id) {
  type: INVALIDATE_TICKER,
  id
}

export function fetchStockData(symbol, id) {
  return function(dispatch) {
    dispatch(requestStockData(symbol));
    return fetch(
      `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json`)
      .then(json => dispatch(recieveStockData(json)))
      .catch(err => dispatch(invalidateTicker(id)))
  }
}