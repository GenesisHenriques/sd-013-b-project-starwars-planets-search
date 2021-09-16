import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function HeadTable() {
  const { data } = useContext(PlanetsContext);
  let keys = [];
  // Colocando no array 'keys' os valores das chaves do obj 'data';
  if (data.length) {
    keys = Object.keys(data[0]);
  }

  return (
    <thead>
      <tr>
        {
          keys.map((key) => (
            <th key={ key }>{ key }</th>
          ))
        }
      </tr>
    </thead>
  );
}
