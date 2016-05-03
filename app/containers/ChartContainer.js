import React, { Component } from 'react';
import { Chart } from '../components/Chart';

var options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
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

export class ChartContainer extends Component {
  render() {
    return (
      <div className="chart-container">Here be chart
        <Chart container="hello" options={options}/>
      </div>
      /*
        <RoomTitle/>
        <ZoomButtons/>
        <TimeButtons/>
        <Chart/>
      */
    );
  }
}
