import React, { useCallback, useContext, useEffect, useState } from 'react';
import MainContext from '../../context/MainContext';

export default function Table() {
  const [headers, setHeaders] = useState();
  const [planets, setPlanets] = useState([]);
  const { data, filters } = useContext(MainContext);

  const getHeaders = useCallback(() => {
    const keys = data[0] && Object.keys(data[0]);
    setHeaders(keys);
  }, [data]);

  const filterPlanets = useCallback(() => {
    const { filterByName: { name: fitlterName } } = filters;
    const planetsFilters = data.filter(({ name }) => (
      name.toUpperCase().includes(fitlterName.toUpperCase())));
    setPlanets(planetsFilters);
  }, [data, filters]);

  useEffect(() => {
    getHeaders();
    filterPlanets();
  }, [filterPlanets, getHeaders]);

  return (
    <table>
      <thead>
        <tr>
          {
            headers && headers.map((header) => (
              <th key={ header }>{header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.population}</td>
              <td>{planet.surface_water}</td>
              <td>
                <ul>
                  {planet.films.map((film) => (
                    <li key={ film }>{film}</li>
                  ))}
                </ul>
              </td>
              <td>{planet.gravity}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

// link refe para Table semantica https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody
