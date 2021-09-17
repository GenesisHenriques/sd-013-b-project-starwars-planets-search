import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ id, options, ...rest }) => (
  <select data-testid={ id } name={ id } id={ id } { ...rest }>
    { options.map((optionName, index) => (
      <option key={ `${index}-${optionName}` } value={ optionName }>
        { optionName }
      </option>
    )) }
  </select>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
