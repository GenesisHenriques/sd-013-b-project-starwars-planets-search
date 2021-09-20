import React from 'react';

function SelectFilter(props) {
  const { name, options, onChange, testId } = props;
  return (
    <select name={ name } data-testid={ testId } onChange={ onChange }>
      { options.map((option, index) => (
        <option
          key={ index }
          value={ option }
        >
          {option}
        </option>
      )) }
    </select>
  );
}

export default SelectFilter;
