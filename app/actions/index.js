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
export function requestStockData(id) {
  return {
    type: REQUEST_STOCK_DATA,
    id,
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
    dispatch(requestStockData(id));
    return fetch(
      `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveStockData(id, json));
        dispatch(addSeries(id));
      })
      .catch(err => dispatch(invalidateTicker(id)));
  };
}

export const ADD_SERIES = 'ADD_SERIES';
export function addSeries(id) {
  return {
    type: ADD_SERIES,
    id,
  }
}

export const REMOVE_SERIES = 'REMOVE_SERIES';
export function removeSeries(id) {
  return {
    type: REMOVE_SERIES,
    id,
  }
}

export const MARK_AS_ADDED = 'MARK_AS_ADDED';
export function markAsAdded(id) {
  return {
    type: MARK_AS_ADDED,
    id,
  }
}

export const MARK_AS_REMOVED = 'MARK_AS_REMOVED';
export function markAsRemoved(id) {
  return {
    type: MARK_AS_REMOVED,
    id,
  }
}
