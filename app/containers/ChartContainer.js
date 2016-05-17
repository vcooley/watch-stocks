import { connect } from 'react-redux';
import { Chart } from '../components/Chart';
import { markAsAdded, markAsRemoved } from '../actions';

var options = {
  rangeSelector: {selected: 1}
        /* [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [['2016-05-16',5], ['2016-05-16', 7], ['2016-05-16', 3]]
        /]*/
    };

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers,
    series: state.series,
    options,
    container: 'stocks-chart',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markAsAdded: (id) => { dispatch(markAsAdded(id)); },
    markAsRemoved: (id) => { dispatch(markAsRemoved(id)); },
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Chart);
