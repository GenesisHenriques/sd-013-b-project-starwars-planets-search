import React from 'react';
import PropTypes from 'prop-types';

function Select({ name, onChange, options }) {
  return (
    <label htmlFor={ name }>
      <select
        name={ name }
        onChange={ onChange }
        id={ name }
        data-testid={ `${name}-filter` }
      >
        {
          options.map((option) => (
            <option key={ option }>
              {option}
            </option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
