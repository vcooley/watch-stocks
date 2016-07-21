import React from 'react';
import { connect } from 'react-redux';
import { fetchStockData, localAddTicker, localRemoveTicker, removeSeries } from '../actions';
import TickerList from '../components/TickerList';


class TickerContainer extends React.Component {
  render() {
    return (
      <TickerList {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTicker: (symbol) => {
      const action = dispatch(localAddTicker(symbol));
      dispatch(fetchStockData(symbol, action.id));
    },
    handleRemoveTicker: (id) => {
      dispatch(removeSeries(id));
      dispatch(localRemoveTicker(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerContainer);
