import { connect } from 'react-redux';
import { Chart } from '../components/Chart';
import { initializeChart } from '../actions';

var options = {
        text: 'Fruit Consumption',

        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    };

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers,
    series: state.series,
    options,
    container: 'my-chart',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Give redux access to chart
    initializeChart: (chart) => {
      dispatch(initializeChart(chart));
    },
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Chart);
