import React, { useEffect, useContext } from 'react';

import TableHeader from './TableHeader';
import Context from '../utils/Context';

export default function TableContents() {
  const { planetsList,
    updatePlanetsList,
    name,
    filterByNumericValues,
    filteredPlanets,
    setFilteredPlanets } = useContext(Context);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => data.json())
      .then((result) => result.results)
      .then((results) => updatePlanetsList(results));
  }, [updatePlanetsList]);

  const comparissonBoolean = (filterObj, planet) => {
    switch (filterObj.comparison) {
    case 'maior que':
      return Number(filterObj.value) < Number(planet[filterObj.column]);
    case 'menor que':
      return Number(filterObj.value) > Number(planet[filterObj.column]);
    case 'igual a':
      return Number(filterObj.value) === Number(planet[filterObj.column]);
    default:
      return '';
    }
  };

  useEffect(() => {
    let finalFilter = planetsList;
    if (name !== '') {
      finalFilter = finalFilter
        .filter((planets) => planets.name.includes(name));
    }
    if (filterByNumericValues.length > 0) {
      finalFilter = finalFilter
        .filter((planet) => filterByNumericValues
          .every((filter) => comparissonBoolean(filter, planet)));
    }
    setFilteredPlanets(finalFilter);
  }, [planetsList, name, filterByNumericValues, setFilteredPlanets]);

  const planetsMap = (array) => (
    array.map((planet) => (
      <tr key={ planet.name }>
        <td>{ planet.name }</td>
        <td>{ planet.climate }</td>
        <td>{ planet.created }</td>
        <td>{ planet.diameter }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.films.length > 0 ? planet.films.length : 0 }</td>
        <td>{ planet.gravity }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ planet.population }</td>
        <td>{ planet.residents }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.surface_water }</td>
        <td>{ planet.terrain }</td>
      </tr>
    ))
  );

  return (
    <table>
      <TableHeader />
      <tbody>
        { filteredPlanets.length > 0
          ? planetsMap(filteredPlanets) : planetsMap(planetsList) }
      </tbody>
    </table>
  );
}
