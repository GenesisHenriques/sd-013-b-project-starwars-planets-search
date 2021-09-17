import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters: { filterByName } } = useContext(PlanetsContext);

  return (
    <table className="table">
      <thead>
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
          <th>Residents</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        { data
          .filter(({ name }) => name.toLowerCase().includes(filterByName.name))
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
