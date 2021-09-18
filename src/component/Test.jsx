import React, { useState } from 'react';

function Test() {
  const [planet, setPlanet] = useState(
    {
      filters: {
        filterByName: {
          name: 'Tatoo',
        },
      },
    },
  );

  return (
    <div>
      <label htmlFor="planet">
        <input
          type="text"
          name="planet"
          value={ planet.filters.filterByName.name }
          onChange={ ({ target }) => setPlanet({
            filters: { filterByName: { name: target.value } } }) }
        />
      </label>
    </div>
  );
}
// (e) => setNome(e.target.value)
export default Test;
