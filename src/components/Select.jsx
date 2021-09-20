import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';
import { saveSelects, setInit } from '../services/helper';

export default function Select({ params }) {
  const [state, setState] = useState(setInit(params.filter));
  const { setSelectColumn, setSelectComparison } = useContext(PlanetContext);
  /* Criei esse objeto (objSelect) para poder passar as duas funções como parâmetro no saveSelects,
pois só pode passar até 4 argumentos numa arrow function segundo o lint */
  const objSelect = {
    setSelectColumn,
    setSelectComparison,
  };

  const data = {
    column: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    comparison: ['maior que', 'menor que', 'igual a'],
  };

  return (
    <select
      data-testid={ params.id }
      name={ params.title }
      value={ state }
      onChange={ ({ target }) => saveSelects(setState, objSelect, target, params.filter) }
    >
      {data[params.filter].map((item, index) => (
        <option value={ item } key={ index }>
          {item}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
};
