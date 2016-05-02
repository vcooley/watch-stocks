import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTicker } from '../actions';

let NewTicker = ({ dispatch }) => {
  let input;
  let newTicker;
  return (
    <li className="ticker">
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTicker(input.value));
        input.value = '';
      }} >
        <input type="text" ref={node => {
          input = node;
        }} />
        <button>Add Stock</button>
      </form>
    </li>
  );
};

NewTicker.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

NewTicker = connect()(NewTicker);

module.exports = NewTicker;
