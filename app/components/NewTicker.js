import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTicker, fetchStockData } from '../actions';

let NewTicker = ({ onAddTicker }) => {
  let input;
  let newTicker;
  return (
    <li className="ticker">
      <form onSubmit={(e) => {
        e.preventDefault();
        onAddTicker(input.value);
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
  onAddTicker: PropTypes.func.isRequired,
};

NewTicker = connect()(NewTicker);

module.exports = NewTicker;
