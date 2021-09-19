import React from 'react';
import MyContext from '../context/MyContext';

function Table() {
  return (
    <MyContext.Consumer>
      {(results) => (
        <table>
          <tr>
            { Object.keys(results[0]).map((name) => (<th key={ name }>{name}</th>)) }
          </tr>
          {results.map((res) => (
            <tr key={ res.name }>
              <td>{ res.name }</td>
              <td>{ res.rotation_period }</td>
              <td>{ res.orbital_period }</td>
              <td>{ res.diameter }</td>
              <td>{ res.climate }</td>
              <td>{ res.gravity }</td>
              <td>{ res.terrain }</td>
              <td>{ res.surface_water }</td>
              <td>{ res.population }</td>
              <td>{ res.films }</td>
              <td>{ res.created }</td>
              <td>{ res.edited }</td>
              <td>{ res.url }</td>
            </tr>
          ))}
        </table>
      )}
    </MyContext.Consumer>
  );
}

export default Table;
