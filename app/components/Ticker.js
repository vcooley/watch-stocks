import React, { PropTypes } from 'react';

function Ticker(props) {
  const { onRemoveTicker, tickerSymbol, description, id } = props;
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
};

module.exports = Ticker;
