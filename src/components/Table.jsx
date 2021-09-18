import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const { data, filterName, filterByPlanet } = useContext(Context);
  const { name } = filterName.filterByName;

  if (data === '') {
    return <span> Loading </span>;
  }

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
          {data.filter((filterN) => filterN.name.includes(name))
            .map((rowsPlanet, index0) => (
              <tr key={ index0 }>
                {Object.values(rowsPlanet).map((info, index1) => (
                  <td key={ index1 }>
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
