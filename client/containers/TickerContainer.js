import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { addTicker, removeTicker, fetchStockData } from '../actions';
import TickerList from '../components/TickerList';

const socket = io('http://127.0.0.1:3000');

class TickerContainer extends React.Component {
  render() {
    return (
      <TickerList {...this.props} socket={socket} />
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
      const action = dispatch(addTicker(symbol));
      dispatch(fetchStockData(symbol, action.id));
    },
    handleRemoveTicker: (id) => {
      dispatch(removeTicker(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerContainer);
