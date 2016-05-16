import fetch from 'isomorphic-fetch';

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

export const RECEIVE_STOCK_DATA = 'RECEIVE_STOCK_DATA';
export function receiveStockData(id, json) {
  return {
    type: RECEIVE_STOCK_DATA,
    id,
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
  return {
    type: INVALIDATE_TICKER,
    id,
  };
}

export function fetchStockData(symbol, id) {
  return (dispatch) => {
    dispatch(requestStockData(symbol));
    return fetch(
      `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveStockData(id, json)))
      .catch(err => dispatch(invalidateTicker(id)));
  };
}

export const INITIALIZE_CHART = 'INITIALIZE_CHART';
export function initializeChart(chart) {
  return {
    type: INITIALIZE_CHART,
    chart,
  };
}
