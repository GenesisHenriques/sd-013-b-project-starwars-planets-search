import React, { useContext } from 'react';
import Context from '../../context/Context';
import func from '../../services';

function ValuesFilter() {
  const { state } = useContext(Context);
  const {
    // state: {
    //   filters:
    //   {
    //     filterByNumericValues,
    //   },
    // },
    setState,
  } = useContext(Context);

  const onChange = (e) => {
    setState(func.onChangeValues(
      state, e,
    ));
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ onChange }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ onChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="value-filter">
        {'Value: '}
        <input
          name="value"
          id="value-filter"
          data-testid="value-filter"
          type="number"
          onChange={ onChange }
        />
      </label>
      <button
        onClick={ () => setState(func.filterByNumericValues(state)) }
        data-testid="button-filter"
        type="button"
      >
        Search
      </button>
    </div>
  );
}

export default ValuesFilter;
