import React, { Component, PropTypes } from 'react';
const Highcharts = require('highcharts/highstock');

export class Chart extends Component {
  addSeriesToChart(series) {
    const seriesIndex = this.chart.series.findIndex( chartSeries => {
      return chartSeries.id === series.id;
    });
    if (seriesIndex !== -1 ){
      this.removeSeriesFromChart(series);
    }
    this.chart.addSeries(series.chartData);
    this.props.markAsAdded(series.id)
  }

  removeSeriesFromChart(series) {
    const seriesIndex = this.chart.series.findIndex( chartSeries => {
      return chartSeries.id === series.id;
    })
    if (seriesIndex !== -1) {
      this.chart.series[seriesIndex].remove();
    }
    this.props.markAsRemoved(series.id);
  } 

  componentDidMount() {
    if (this.props.modules) {
      this.props.modules.forEach( module => module(Highcharts));
    }
    this.chart = new Highcharts[this.props.type || 'StockChart'](
      this.props.container,
      this.props.options
    );
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps)
    let seriesToAdd = newProps.series.filter( series => {
      return !series.isVisible && series.markedToAdd;
    })
      .map( series => {
        let ticker = newProps.tickers.find( ticker => ticker.id === series.id );
        series.chartData = {
          name: ticker.tickerSymbol,
          data: ticker.chartData.data,
          id: ticker.id,
        }
        return series;
      });
    let seriesToRemove = newProps.series.filter( series => {
      return series.isVisible && series.markedToRemove;
    });
    seriesToAdd.forEach( series => this.addSeriesToChart(series));
    seriesToRemove.forEach( series => this.removeSeriesFromChart(series));
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div id={this.props.container} className='chart-container'></div>
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
