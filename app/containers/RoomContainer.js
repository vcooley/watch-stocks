import React, { Component } from 'react';
import { TickerContainer } from './TickerContainer';
import { ChartContainer } from './ChartContainer';

class RoomContainer extends Component {
  render() {
    return (
      <div className="room-container">
        <ChartContainer />
        <TickerContainer />
      </div>
    );
  }
}

module.exports = RoomContainer;
