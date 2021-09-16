import React, { useContext } from 'react';
import { Context } from '../context/Provider';

function TableHead() {
  const { data } = useContext(Context);
  let keys = [];
  if (data.length > 0) {
    keys = Object.keys(data[0]);
  }
  return (
    <tr>
      {keys.map((key) => (
        <th key={ key }>
          {key}
        </th>))}
    </tr>
  );
}

export default TableHead;
