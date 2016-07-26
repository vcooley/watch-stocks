import { combineReducers } from 'redux';
import { tickers } from './tickers';
import { series } from './series';
import { errors } from './errors';

export const rootReducer = combineReducers({ tickers, series, errors });
