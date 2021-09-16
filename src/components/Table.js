import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function makeTableHead(data) {
  if (data) {
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map((info) => (
            <th key={ info }>
              {info}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

function makeTableBody(data) {
  if (data) {
    const keys = Object.keys(data[0]);
    return (
      <tbody>
        {data.map((planet, index) => (
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
  const { data } = useContext(PlanetsContext);
  return (
    <table>
      {makeTableHead(data)}
      {makeTableBody(data)}
    </table>
  );
}
