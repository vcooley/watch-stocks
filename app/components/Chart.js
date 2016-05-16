import React, { Component, PropTypes } from 'react';
const Highcharts = require('highcharts/highstock');

export class Chart extends Component {
  componentDidMount() {
    if (this.props.modules) {
      this.props.modules.forEach(module => module(Highcharts));
    }
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      this.props.options
    );
  }


  componentWillReceiveProps(newProps) {
    let oldSeriesIds = this.props.tickers.map(ticker => ticker.id);
    let seriesToAdd = this.newProps.tickers.filter();
    let seriesToRemove = this.newProps.tickers.filter();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div id={this.props.container}></div>
    );
  }
}

Chart.propTypes = {
  modules: PropTypes.any,
  type: PropTypes.string,
  container: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  tickers: PropTypes.array.isRequired,
};
