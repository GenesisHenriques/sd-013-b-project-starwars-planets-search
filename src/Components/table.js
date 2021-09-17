import React, { useContext } from 'react';
import MyContext from '../Context/context';

const TABLE_HEADER = [
  'climate',
  'created',
  'diameter',
  'edited',
  'films',
  'gravity',
  'orbital period',
  'population',
  'rotation period',
  'name',
  'surface water',
  'terrain',
  'url',
];

function Table() {
  const { data, name, handleFilterChange } = useContext(MyContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Filtre pelo nome:
        <input
          value={ name }
          type="text"
          onChange={ handleFilterChange }
          data-testid="name-filter"
        />
      </label>
      <table>
        <thead>
          <tr>
            {TABLE_HEADER.map((item, index) => <th key={ index }>{item}</th>)}
          </tr>
        </thead>

        <tbody>
          {data
            .filter((item) => item.name.toLowerCase().includes(name))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.climate}</td>
                <td>{item.created}</td>
                <td>{item.diameter}</td>
                <td>{item.edited}</td>
                <td>{item.films}</td>
                <td>{item.gravity}</td>
                <td>{item.orbital_period}</td>
                <td>{item.population}</td>
                <td>{item.rotation_period}</td>
                <td>{item.name}</td>
                <td>{item.surface_water}</td>
                <td>{item.terrain}</td>
                <td>{item.url}</td>
              </tr>))}
          {/* // .filter((letter) => letter.includes({ name }))} */}

        </tbody>

      </table>
    </div>
  );
}

export default Table;
