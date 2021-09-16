import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, type, name, value, onchange, placeholder }) {
  return (
    <label htmlFor={ name }>
      {text}
      <input
        type={ type }
        name={ name }
        id={ name }
        value={ value }
        onChange={ onchange }
        autoComplete="off"
        placeholder={ placeholder }
        data-testid={ `${name}-filter` }
      />
    </label>
  );
}

Input.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  text: '',
  placeholder: '',
};

export default Input;
