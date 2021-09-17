import React, { useEffect, useState } from 'react';

export default function PlanetsTable() {
  const [planets, setPlanet] = useState([]);
  const fetchTimes = 1;

  // const planetsList = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const apiRequest = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const jsonResolve = await apiRequest.json();
      const data = jsonResolve.results;
      setPlanet(data);
    }
    fetchData();
  }, [fetchTimes]);
  console.log(planets);
  if (!planets.length) return <p>Loading...</p>;
  return (
    <table>
      <tr>
        <th>Name</th>
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
      {planets.map((planet) => (
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
  );
}
