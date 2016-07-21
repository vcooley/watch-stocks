import fetch from 'isomorphic-fetch';
import { apiKey } from '../config';

let nextTicker = 0;

export const ADD_TICKER = 'ADD_TICKER';
export function addTicker(symbol) {
  return {
    type: ADD_TICKER,
    id: nextTicker++,
    isLocal: false,
    symbol,
  };
}

export function localAddTicker(symbol) {
  const action = addTicker(symbol);
  action.isLocal = true;
  return action;
}

export const REQUEST_STOCK_DATA = 'REQUEST_STOCK_DATA';
export function requestStockData(id) {
  return {
    type: REQUEST_STOCK_DATA,
    id,
  };
}

export const RECEIVE_STOCK_DATA = 'RECEIVE_STOCK_DATA';
export function receiveStockData(id, data) {
  return {
    type: RECEIVE_STOCK_DATA,
    id,
    chartData: data,
    receivedAt: Date.now(),
  };
}

export const REMOVE_TICKER = 'REMOVE_TICKER';
export function removeTicker(id) {
  return {
    type: REMOVE_TICKER,
    isLocal: false,
    id,
  };
}

export function localRemoveTicker(id) {
  const action = removeTicker(id);
  action.isLocal = true;
  return action;
}

export const INVALIDATE_TICKER = 'INVALIDATE_TICKER';
export function invalidateTicker(id) {
  return {
    type: INVALIDATE_TICKER,
    id,
  };
}

export const ADD_SERIES = 'ADD_SERIES';
export function addSeries(id) {
  return {
    type: ADD_SERIES,
    id,
  };
}

export const REMOVE_SERIES = 'REMOVE_SERIES';
export function removeSeries(id) {
  return {
    type: REMOVE_SERIES,
    id,
  };
}

export const MARK_AS_ADDED = 'MARK_AS_ADDED';
export function markAsAdded(id) {
  return {
    type: MARK_AS_ADDED,
    id,
  };
}

export const MARK_AS_REMOVED = 'MARK_AS_REMOVED';
export function markAsRemoved(id) {
  return {
    type: MARK_AS_REMOVED,
    id,
  };
}

export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export function errorMessage(err) {
  return {
    type: ERROR_MESSAGE,
    error: err,
  };
}

export function fetchStockData(symbol, id) {
  return (dispatch) => {
    dispatch(requestStockData(id));
    return fetch(
      `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json?column_index=4&order=asc&api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        const data = json.dataset_data.data.map(point => {
          const date = new Date(point[0]);
          return [date.getTime()].concat(point.slice(1));
        });
        dispatch(receiveStockData(id, { data }));
        return dispatch(addSeries(id));
      })
      .catch(err => {
        dispatch(invalidateTicker(id));
        return dispatch(errorMessage(err));
      });
  };
}
