import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data } = useContext(Context);

  if (data.length === 0) return <div>loading...</div>;

  const tableContent = Object.keys(data[0]);
  const residentsIndex = tableContent.indexOf('residents');
  tableContent.splice(residentsIndex, 1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { tableContent.map((key) => <th key={ key }>{ key }</th>) }
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              {tableContent.map((key, index) => <td key={ index }>{ planet[key] }</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
