import React, { useContext, useState, useEffect } from 'react';

import PlanetsContext from '../context/PlanetsContext';

import PlanetRow from './PlanetRow';

function Table() {
  const { data, headers, filters } = useContext(PlanetsContext);
  const { results: planets } = data;
  const { name } = filters.filterByName;

  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    if (planets) {
      setFilteredPlanets(
        planets.filter(({ name: planetName }) => (
          planetName.toLowerCase().includes(name.toLowerCase())
        )),
      );
    }
  }, [name, planets]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets
          && filteredPlanets.map((planet) => (
            <PlanetRow key={ planet.name } planet={ planet } />
          ))}
      </tbody>
    </table>
  );
}

export default Table;

// climate, created, diameter, edited, films, gravity, name,
// orbital_period, population, rotation_period, surface_water,
// terrain, url
