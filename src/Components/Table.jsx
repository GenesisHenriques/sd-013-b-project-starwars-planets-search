import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

export default function Table() {
  const { data } = useContext(AppContext);

  function tableHead() {
    if (data.length) {
      return (
        <tr>
          { Object.keys(data[0]).map((d, index) => (
            <th key={ index }>
              {d}
            </th>))}
        </tr>
      );
    }
  }

  function tableCells() {
    if (data.length) {
      return (
        data.map((planet, index) => (
          <tr key={ index }>
            { Object.values(planet).map((info, id) => (<td key={ id }>{ info }</td>)) }
          </tr>
        ))
      );
    }
  }

  return (
    <table>
      { tableHead() }
      { tableCells() }
    </table>
  );
}
