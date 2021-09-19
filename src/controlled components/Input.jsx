import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, type, handleChange, name, testId, min, value }) {
  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        onChange={ handleChange }
        name={ name }
        id={ name }
        data-testid={ testId }
        placeholder={ text }
        min={ min }
        value={ value }
      />
    </label>
  );
}

Input.defaultProps = {
  testId: '',
  min: 0,
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string,
  min: PropTypes.number,
  value: PropTypes.string.isRequired,
};

export default Input;
