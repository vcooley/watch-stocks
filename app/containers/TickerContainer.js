import { connect } from 'react-redux';
import { addTicker, removeTicker } from '../actions';
import TickerList from '../components/TickerList';

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTicker: (symbol) => {
      dispatch(addTicker(symbol));
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
