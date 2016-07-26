import { ERROR_MESSAGE } from '../actions';

export const errors = (state = { tickerError: '' }, action) => {
  let error;
  switch (action.type) {
    case ERROR_MESSAGE:
      error = {};
      error[action.scope] = action.message;
      return Object.assign({}, state, error);
    default:
      return state;
  }
};
