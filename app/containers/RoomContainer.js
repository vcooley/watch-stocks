var React = require('react');
var Room = require('../components/Room');
var TickerContainer = require('./TickerContainer');
var ChartContainer = require('./ChartContainer');

var HomeContainer = React.createClass({
  render: function() {
    return (
      <div className= 'room-container'>
        <ChartContainer/>
        <TickerContainer/>
      </div>
    )
  }
});

module.exports = HomeContainer;
