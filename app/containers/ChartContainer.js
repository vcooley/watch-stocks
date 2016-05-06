import { connect } from 'react-redux';
import Chart from '../components/Chart';

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const ChartContainer = connect(
  mapStateToProps, mapDispatchToProps)(Chart);
