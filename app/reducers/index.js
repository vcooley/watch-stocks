import { combineReducers } from 'redux';
import { tickers } from './tickers';
import { series } from './series';

export const rootReducer = combineReducers({ tickers, series });
