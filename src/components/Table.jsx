import React, { useContext } from 'react';
import Context from '../context/context';
import Dropdown from './Dropdown';

function Table() {
  const { data, filterName, filterByPlanet } = useContext(Context);
  const { name } = filterName.filterByName;

  return (
    <div>
      <label htmlFor="planet-filter">
        Name:
        <input
          type="text"
          id="planet-filter"
          data-testid="name-filter"
          onChange={ ({ target }) => filterByPlanet(target.value) }
          value={ name }
        />
      </label>
      <Dropdown />
      <table>
        <thead>
          <tr>
            {
              data[0]
              && Object.keys(data[0])
                .filter((key) => key !== 'residents')
                .map((key) => <th key={ key }>{ key }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {data.filter((filter) => filter.name.toLowerCase().includes(name))
            .map((rowsPlanet, index) => (
              <tr key={ index }>
                {Object.values(rowsPlanet).map((info, key) => (
                  <td key={ key }>
                    {info}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
