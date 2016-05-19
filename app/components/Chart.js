import React, { Component, PropTypes } from 'react';
const Highcharts = require('highcharts/highstock');

export class Chart extends Component {

  componentDidMount() {
    if (this.props.modules) {
      this.props.modules.forEach(module => module(Highcharts));
    }
    this.chart = new Highcharts[this.props.type || 'StockChart'](
      this.props.container,
      this.props.options
    );
  }

  componentWillReceiveProps(newProps) {
    const seriesToAdd = newProps.series.filter(series => {
      return !series.isVisible && series.markedToAdd;
    })
      .map(series => {
        const pairedTicker = newProps.tickers.find(ticker => {
          return ticker.id === series.id;
        });
        const newSeries = Object.assign({}, series);
        newSeries.chartData = {
          name: pairedTicker.tickerSymbol,
          data: pairedTicker.chartData.data,
          id: pairedTicker.id,
        };
        return newSeries;
      });
    const seriesToRemove = newProps.series.filter(series => {
      return series.isVisible && series.markedToRemove;
    });
    seriesToAdd.forEach(series => this.addSeriesToChart(series));
    seriesToRemove.forEach(series => this.removeSeriesFromChart(series));
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  addSeriesToChart(series) {
    const seriesIndex = this.chart.series.findIndex(chartSeries => {
      return chartSeries.id === series.id;
    });
    if (seriesIndex !== -1) {
      this.removeSeriesFromChart(series);
    }
    this.chart.addSeries(series.chartData);
    this.props.markAsAdded(series.id);
  }

  removeSeriesFromChart(series) {
    const seriesIndex = this.chart.series.findIndex(chartSeries => {
      return chartSeries.id === series.id;
    });
    if (seriesIndex !== -1) {
      this.chart.series[seriesIndex].remove();
    }
    this.props.markAsRemoved(series.id);
  }

  render() {
    return (
      <div id={this.props.container} className="chart-container"></div>
    );
  }
}

Chart.propTypes = {
  modules: PropTypes.any,
  type: PropTypes.string,
  container: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  tickers: PropTypes.array.isRequired,
  markAsRemoved: PropTypes.func.isRequired,
  markAsAdded: PropTypes.func.isRequired,
};
