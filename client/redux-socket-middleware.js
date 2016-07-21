import io from 'socket.io-client';
import { ADD_TICKER, REMOVE_TICKER, addTicker, fetchStockData, removeTicker } from './actions';

const socket = io('http://127.0.0.1:3000');

export const socketMiddleware = ({ getState, dispatch }) => {
  socket.on('add ticker', symbol => {
    const addAction = dispatch(addTicker(symbol));
    dispatch(fetchStockData(addAction.symbol, addAction.id));
  });
  socket.on('remove ticker', symbol => {
    const id = getState().tickers.find(ticker => ticker.tickerSymbol === symbol).id;
    const action = dispatch(removeTicker(id));
    return action;
  });

  return next => action => {
    if (action.type === ADD_TICKER && action.isLocal) {
      socket.emit('add ticker', action.symbol);
    } else if (action.type === REMOVE_TICKER && action.isLocal) {
      const symbol = getState().tickers.find(ticker => ticker.id === action.id).tickerSymbol;
      socket.emit('remove ticker', symbol);
    }
    return next(action);
  };
};
