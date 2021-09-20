import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function Table({ data }) {
  const { setFilterName } = useContext(Context);
  const [name, setName] = useState('');

  useEffect(() => {
    setFilterName(name);
  }, [name, setFilterName]);

  let header = [];
  if (data.length > 0) {
    header = Object.keys(data[0]);
  }

  function handleChange({ target }) {
    setName(target.value);
  }

  const filteredPlanets = data.filter((filteredPlanet) => (
    filteredPlanet.name
      .toLowerCase()
      .includes(name)));
  const planets = filteredPlanets.map((planet, index) => (
    <tr key={ index }>
      { Object.values(planet).map((element) => <td key={ element }>{element}</td>)}
    </tr>
  ));

  return (
    <div>
      <label htmlFor="planetFilter">
        <input
          type="text"
          data-testid="name-filter"
          id="planetFilter"
          onChange={ handleChange }
        />
      </label>
      <table>
        <thead>
          <tr>
            {header.map((item) => <th key={ item }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Table;
