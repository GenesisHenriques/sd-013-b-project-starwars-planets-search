import React from 'react';
import PropTypes from 'prop-types';

function InputFilter(props) {
  const { name, type, onChange, testId } = props;
  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        name={ name }
        onChange={ onChange }
        id={ name }
        data-testid={ testId }
      />
    </label>
  );
}

InputFilter.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default InputFilter;
