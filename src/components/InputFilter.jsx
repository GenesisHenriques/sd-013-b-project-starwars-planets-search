import React from 'react';

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

export default InputFilter;
