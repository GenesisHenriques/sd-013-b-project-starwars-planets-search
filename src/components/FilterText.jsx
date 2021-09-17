import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterText() {
  const { searchText, setSearchText } = useContext(PlanetsContext);
  // console.log(name);
  return (
    <div>
      <label htmlFor="name">
        <input
          type="text"
          value={ searchText }
          name="name"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setSearchText(value) }
        />
      </label>
    </div>
  );
}

export default FilterText;
