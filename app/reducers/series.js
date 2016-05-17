import { ADD_TICKER, 
         ADD_SERIES, 
         MARK_AS_ADDED, 
         MARK_AS_REMOVED, 
         REMOVE_SERIES } from '../actions';

const defaultItem = {
  isVisible: false,
  markedToRemove: false,
  markedToAdd: false,
  data: {}
}

const seriesItem = (state = defaultItem, action) => {
  switch (action.type) {
    case ADD_TICKER:
        return Object.assign({}, state, {id: action.id});
    case ADD_SERIES:
        return Object.assign({}, state, {
          markedToAdd: true, 
          markedToRemove: false
        });
    case REMOVE_SERIES:
      return Object.assign({}, state, {
        markedToRemove: true,
        markedToAdd: false
      });
    case MARK_AS_ADDED:
      return Object.assign({}, state, {
        isVisible: true, 
        markedToAdd: false, 
        markedToRemove: false 
      });
    case MARK_AS_REMOVED:
      return Object.assign({}, state, {
        isVisible: false, 
        markedToAdd: false, 
        markedToRemove: false 
      });
    default:
      return state;
  }
}

export const series = (state = [], action) => {
  switch (action.type) {
    case ADD_TICKER:
      let removeDupes = state.filter(series => (series.id !== action.id));
      removeDupes.push(seriesItem(defaultItem, action));
      return removeDupes;
    default:
      return state.map(series => {
          if (series.id === action.id) {
            return seriesItem(series, action);
          }
          return series
        });
  }
}
