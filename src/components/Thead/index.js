import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function Thead() {
  const { data } = useContext(PlanetsContext);
  let keys = [];
  if (data.length) {
    keys = Object.keys(data[0]);
  }
  return (
    <thead>
      <tr>
        { keys.map((key) => (
          <th key={ key }>{ key }</th>
        ))}
      </tr>
    </thead>
  );
}

export default Thead;
