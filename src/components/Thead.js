import React, { useContext } from 'react';
import Context from '../context/Context';

function Thead() {
  const { data } = useContext(Context);
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
