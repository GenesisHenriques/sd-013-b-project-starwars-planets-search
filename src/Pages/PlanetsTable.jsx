import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

export default function PlanetsTable() {
  const { planets } = useContext(PlanetsContext);
  const [planetsList, setPlanetsList] = useState(planets);

  useEffect(() => {
    setPlanetsList(planets);
  }, [planets]);

  const filterPlanets = (inputText) => {
    console.log(inputText);
    const filteredPlanets = planets.filter((planet) => planet.name.includes(inputText));
    return filteredPlanets;
  };
  // if (!planets.length) return <p>Loading...</p>;
  return (
    <>
      <input
        type="text"
        onChange={ (ev) => {
          const inputFilter = filterPlanets(ev.target.value);
          setPlanetsList(inputFilter);
        } }
        data-testid="name-filter"
      />
      <table>
        <tr>
          <th>Planets</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        {planetsList.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => <p key={ planet.name }>{film}</p>)}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
