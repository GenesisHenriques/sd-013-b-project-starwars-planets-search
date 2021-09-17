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
          // Tabelas - https://www.delftstack.com/pt/howto/javascript/create-table-javascript/#:~:text=Para%20criar%20um%20elemento%20HTML,createElement('table')%20.
          keys.map((key) => (
            <th key={ key }>{ key }</th>
          ))
        }
      </tr>
    </thead>
  );
}
