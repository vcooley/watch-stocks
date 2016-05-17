import React, { PropTypes } from 'react';

let Ticker = ( props ) => {
  const { onRemoveTicker, tickerSymbol, description, id, chartData } = props;
  return (
    <li
      className="ticker"
      onClick={e => {
        e.preventDefault();
        onRemoveTicker(id);
      }}
    >
      <h2>{tickerSymbol}</h2>
      <div>{description}</div>
    </li>
  );
}

Ticker.propTypes = {
  id: PropTypes.number.isRequired,
  tickerSymbol: PropTypes.string.isRequired,
  onRemoveTicker: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired,
};

module.exports = Ticker;
