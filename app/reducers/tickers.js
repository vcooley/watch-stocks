import {
  ADD_TICKER, REQUEST_STOCK_DATA, RECEIVE_STOCK_DATA, 
  REMOVE_TICKER, INVALIDATE_TICKER,
} from '../actions';

const ticker = (state = {
  chartData: {},
  isFetching: false,
  didInvalidate: false,
  isHidden: false,
}, action) => {
  switch(action.type) {
    case ADD_TICKER:
      return Object.assign({}, state, {
        id: action.id,
        tickerSymbol: action.symbol,
        description: '',
      });
    case REQUEST_STOCK_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_STOCK_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        chartData: action.chartData,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

const tickers = (state = [], action) => {
  switch (action.type) {
    case ADD_TICKER:
      return [
        ...state,
        ticker(undefined, action),
      ];
    case REMOVE_TICKER:
      return state.filter(t => {
        return !(t.id === action.id);
      });

    default:
      return state;
  }
};

module.exports = tickers;
