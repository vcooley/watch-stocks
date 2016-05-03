import { connect } from 'react-redux';
import { addTicker, removeTicker, fetchStockData } from '../actions';
import TickerList from '../components/TickerList';

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTicker: (symbol) => {
      const action = dispatch(addTicker(symbol));
      dispatch(fetchStockData(symbol, action.id));
    },
    handleRemoveTicker: (id) => {
      dispatch(removeTicker(id));
    },
  };
};

const TickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(TickerList);

module.exports = TickerContainer;
