import React, { PropTypes } from 'react';

const NewTicker = ({ onAddTicker }) => {
  let input;
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

module.exports = NewTicker;
