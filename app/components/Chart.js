import React, { Component } from 'react';
const Highcharts = require('highcharts');

export class Chart extends Component {
  componentDidMount() {
    if (this.props.modules) {
      this.props.modules.forEach(module => module(Highcharts))
    }
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      this.props.options
    );
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <div id={this.props.container}></div>
    )
  }
}