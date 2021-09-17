import React, { useContext } from 'react';
import Context from '../context/Context';
import useFilter from '../hooks/useFilter';

export default function Table() {
  const { data } = useContext(Context);
  const [handleFilter] = useFilter();

  if (!data.length) return <div>loading...</div>;

  const tableHeadContent = Object.keys(data[0]);
  const residentsIndex = tableHeadContent.indexOf('residents');
  tableHeadContent.splice(residentsIndex, 1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { tableHeadContent.map((key) => <th key={ key }>{ key }</th>) }
          </tr>
        </thead>
        <tbody>
          { handleFilter().map((planet) => (
            <tr key={ planet.name }>
              {tableHeadContent.map((key, index) => (
                <td key={ index }>{ planet[key] }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
