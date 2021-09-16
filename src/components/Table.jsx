import React, { useEffect, useState } from 'react';
import fetchAPI from '../service/serviceAPI';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const planets = await fetchAPI();
      setData(planets.results);
    };
    fetch();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            { data[0]
              && Object.keys(data[0])
                .filter((key) => key !== 'residents')
                .map((key) => <th key={ key }>{ key }</th>) }
          </tr>
        </thead>
        <tbody>
          { data.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
