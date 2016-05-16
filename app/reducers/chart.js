import { ADD_SERIES, INITIALIZE_CHART } from '../actions';

let chart;

export const series = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_CHART:
      chart = action.chart;
      return action.chart;
    case ADD_SERIES:

    default:
      return state;
  }
};
