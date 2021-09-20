import React from 'react';
import PropTypes from 'prop-types';

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

SelectFilter.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf[PropTypes.string].isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default SelectFilter;
