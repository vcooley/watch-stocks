import React, { PropTypes } from 'react';
import Ticker from './Ticker';
import NewTicker from './NewTicker';

export default class TickerList extends React.Component {
  render() {
    const { tickers, handleRemoveTicker, handleAddTicker } = this.props;
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
          />
       )}
      <NewTicker
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
  handleRemoveTicker: PropTypes.func.isRequired,
  handleAddTicker: PropTypes.func.isRequired,
};

