var React = require('react');
var Ticker = require('../components/Ticker');
var NewTicker = require('../components/NewTicker.js');

var TickerContainer = React.createClass({
  render: function() {
    return (
      <ul className='ticker-container'>
        <Ticker/>
        <Ticker/>
        <Ticker/>
        <Ticker/>
        <Ticker/>
        <NewTicker/>
      </ul>
    )
  }
});

module.exports = TickerContainer;
