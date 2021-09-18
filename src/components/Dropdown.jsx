import React, { useContext } from 'react';
import Context from '../context/context';
import fetchAPI from '../service/serviceAPI';

function Dropdown() {
  const { filterName, setFilterName } = useContext(Context);
  const { name } = filterName.filterByName;

  const options = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <select
      data-testid="column-filter"
    >
      {options.map((option, index) => (
        <option key={ index }>
          {' '}
          {option}
          {' '}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
