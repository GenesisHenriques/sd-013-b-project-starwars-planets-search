import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, type, handleChange, name, testId }) {
  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        onChange={ handleChange }
        name={ name }
        id={ name }
        data-testid={ testId }
        placeholder={ text }
      />
    </label>
  );
}

Input.defaultProps = {
  testId: '',
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

export default Input;
