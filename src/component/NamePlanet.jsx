import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function NamePlanet() {
  // const [planet, setPlanet] = useState(
  //   {
  //     filters: {
  //       filterByName: {
  //         name: 'Tatoo',
  //       },
  //     },
  //   },
  // );
  const { planet, setPlanet } = useContext(DataContext);

  return (
    <div>
      <label htmlFor="planet">
        <input
          type="text"
          name="planet"
          value={ planet.filters.filterByName.name }
          onChange={ ({ target }) => setPlanet({
            filters: { filterByName: { name: target.value } } }) }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}
// (e) => setNome(e.target.value)
export default NamePlanet;
