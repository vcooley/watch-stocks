import { combineReducers } from 'redux';
import { tickers } from './tickers';
import { chart } from './chart';

export const rootReducer = combineReducers({ tickers, chart });
