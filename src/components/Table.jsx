import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data,
    dataTitle,
    filters: { filterByName, filterByNumericValues },
  } = useContext(PlanetsContext);

  function filterNumeric(filteredByname) {
    if (filterByNumericValues[0] && filteredByname[0]) {
      const { column, comparison, value } = filterByNumericValues[0];

      if (comparison === 'maior que') {
        return filteredByname.filter((planet) => (
          Number(planet[column]) > Number(value)));
      }

      if (comparison === 'menor que') {
        return filteredByname.filter((planet) => (
          Number(planet[column]) < Number(value)));
      }

      if (comparison === 'igual a') {
        return filteredByname.filter((planet) => (
          Number(planet[column]) === Number(value)));
      }
    }
    return filteredByname;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          { dataTitle
            .map((title, index) => <th key={ index }>{ title }</th>) }
        </tr>
      </thead>

      <tbody>
        { filterNumeric(data
          .filter(({ name }) => name.toLowerCase().includes(filterByName.name)))

          .map((
            { name,
              rotation_period: rotation,
              orbital_period: orbital,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: water,
              population,
              residents,
              films,
              created,
              edited },
            index,
          ) => (
            <tr key={ index }>
              <td>{ name }</td>
              <td>{ rotation }</td>
              <td>{ orbital }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ water }</td>
              <td>{ population }</td>
              <td>{ residents }</td>
              <td>{ films }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
}

export default Table;
