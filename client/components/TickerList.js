import React, { PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import Ticker from './Ticker';
import NewTicker from './NewTicker';

export default class TickerList extends React.Component {
  componentDidMount() {
    const { tickers, socket, handleRemoveTicker, handleAddTicker } = this.props;
    socket.on('connect', data => {
      fetch('api/room/0')
        .then(response => response.json())
        .then(json => {
          json.stockList.map(symbol => handleAddTicker(symbol));
        });
    });

    socket.on('add stock', data => {
      handleAddTicker(data.tickerSymbol);
    });

    socket.on('remove stock', data => {
      const tickerToRemove = tickers.find(ticker => {
        return ticker.tickerSymbol === data.tickerSymbol;
      });
      handleRemoveTicker(tickerToRemove.id);
    });
  }

  render() {
    const { tickers, socket, handleRemoveTicker, handleAddTicker } = this.props;
    const handleAddTickerAndEmitAdd = (symbol) => {
      handleAddTicker(symbol);
      socket.emit('add ticker', { tickerSymbol: symbol });
    };
    const handleRemoveTickerAndEmitRemove = (id) => {
      handleRemoveTicker(id);
      const tickerToRemove = tickers.find(ticker => {
        return ticker.id === id;
      });
      socket.emit('remove ticker', {
        tickerSymbol: tickerToRemove.tickerSymbol || '',
      });
    };

    return (
      <ul className="ticker-container">
        {tickers.map(ticker =>
          <Ticker
            key={ticker.id}
            id={ticker.id}
            tickerSymbol={ticker.tickerSymbol}
            description={ticker.description}
            chartData={ticker.chartData}
            onRemoveTicker={handleRemoveTickerAndEmitRemove}
          />
       )}
      <NewTicker
        onAddTicker={handleAddTickerAndEmitAdd}
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

