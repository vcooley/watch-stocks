import React, { Component } from 'react';
const Highcharts = require('highcharts/highstock');

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

  componentWillReceiveProps(nextProps) {
    console.log('current', this.props);
    console.log('next', nextProps);
  }

  render() {
    return (
      <div id={this.props.container}></div>
    )
  }
}