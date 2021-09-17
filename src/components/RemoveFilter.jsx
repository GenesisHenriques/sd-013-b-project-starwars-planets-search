import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function RemoveFilter() {
  const filterColum = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const filterNumber = ['escolhe', 'maior que', 'menor que', 'igual a'];
  const { setSelectCollum, setSelectNumber,
    setNumber, selectCollum } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="colum filter">
        Colum filter:
        <select
          onChange={ ({ target }) => setSelectCollum(target.value) }
        >
          {filterColum.filter((element) => element !== selectCollum)
            .map((element) => <option key={ element }>{element}</option>)}
        </select>
      </label>
      <label htmlFor="number">
        Number filter:
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setSelectNumber(target.value) }
        >
          {filterNumber.map((element) => <option key={ element }>{element}</option>)}
        </select>
      </label>
      <label htmlFor="value">
        Value filter:
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </label>
    </div>
  );
}

export default RemoveFilter;
