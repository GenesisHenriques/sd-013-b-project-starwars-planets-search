import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function makeTableHead(planets) {
  if (planets.length) {
    return (
      <thead>
        <tr>
          {Object.keys(planets[0]).map((info) => (
            <th key={ info }>
              {info}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

function makeTableBody(planets) {
  if (planets.length) {
    const keys = Object.keys(planets[0]);
    return (
      <tbody>
        {planets.map((planet, index) => (
          <tr key={ index }>
            {keys.map((key) => (
              <td key={ key }>
                {planet[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default function Table() {
  const { planets } = useContext(PlanetsContext);

  return (
    <table>
      {makeTableHead(planets)}
      {makeTableBody(planets)}
    </table>
  );
}
