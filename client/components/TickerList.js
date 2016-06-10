import React, { PropTypes } from 'react';
import Ticker from './Ticker';
import NewTicker from './NewTicker';

export default class TickerList extends React.Component {
  componentDidMount() {
    const { tickers, socket, handleRemoveTicker, handleAddTicker } = this.props;
    socket.on('connect', data => {
      console.log('TikcerList mounted, socket connected', data);
    });
    socket.on('add stock', data => {
      console.log('stock added', data);
    });

    socket.on('remove stock', data => {
      console.log('stock removed', data);
    });

  }

  render() {
    const { tickers, socket, handleRemoveTicker, handleAddTicker } = this.props;
    return (
      <ul className="ticker-container">
        {tickers.map(ticker =>
          <Ticker
            key={ticker.id}
            id={ticker.id}
            tickerSymbol={ticker.tickerSymbol}
            description={ticker.description}
            chartData={ticker.chartData}
            onRemoveTicker={handleRemoveTicker}
            socket = {socket}
          />
       )}
      <NewTicker
        socket={socket}
        onAddTicker={handleAddTicker}
      />
    </ul>);
  }
}

TickerList.propTypes = {
  tickers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    tickerSymbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  socket: PropTypes.object.isRequired,
  handleRemoveTicker: PropTypes.func.isRequired,
  handleAddTicker: PropTypes.func.isRequired,
};

