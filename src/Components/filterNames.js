import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function FilterNames() {
  const { filters, setFilters } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterName: {
        name: value,
      },
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ handleChange }
    />
  );
}

export default FilterNames;
