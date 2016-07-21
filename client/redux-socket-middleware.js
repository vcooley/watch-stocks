import io from 'socket.io-client';
import { ADD_TICKER, REMOVE_TICKER, addTicker, fetchStockData,
         removeTicker, removeSeries } from './actions';

const socket = io('http://127.0.0.1:3000');

export const socketMiddleware = ({ getState, dispatch }) => {
  const addAndFetch = symbol => {
    const addAction = dispatch(addTicker(symbol));
    dispatch(fetchStockData(addAction.symbol, addAction.id));
  };

  socket.on('initial tickers', tickers => {
    tickers.forEach(ticker => {
      addAndFetch(ticker);
    });
  });
  socket.on('add ticker', symbol => addAndFetch(symbol));

  socket.on('remove ticker', symbol => {
    const id = getState().tickers.find(ticker => ticker.tickerSymbol === symbol).id;
    dispatch(removeSeries(id));
    return dispatch(removeTicker(id));
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
