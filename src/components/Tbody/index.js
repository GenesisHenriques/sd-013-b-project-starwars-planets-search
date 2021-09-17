import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function Tbody() {
  const { data, filters, newData, setNewData } = useContext(PlanetsContext);

  const { filterByNumericValues } = filters;

  const { name } = filters.filterByName;

  useEffect(() => {
    const filterWithSelectNumbers = () => {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        setNewData(data.filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          return Number(planet[column]) === Number(value);
        }));
      });
    };
    filterWithSelectNumbers();
  }, [filterByNumericValues, setNewData, data]);

  const mapData = (refData) => (
    refData.map((planet) => (
      <tr key={ planet.name }>
        <td>{ planet.name }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ planet.diameter }</td>
        <td>{ planet.climate }</td>
        <td>{ planet.gravity }</td>
        <td>{ planet.terrain }</td>
        <td>{ planet.surface_water }</td>
        <td>{ planet.population }</td>
        <td>{ planet.films[0] }</td>
        <td>{ planet.created }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.url }</td>
      </tr>
    ))
  );

  return (
    <tbody>
      { newData.length
        ? (
          mapData(newData)
        ) : (
          data
            .filter((planet) => planet.name.toLowerCase().includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films[0] }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))
        )}
    </tbody>
  );
}

export default Tbody;
