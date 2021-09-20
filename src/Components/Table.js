import React, { useContext } from 'react';
import StarContext from '../Context/StarContext';
import './Table.css';

function Table() {
  const { data, loading } = useContext(StarContext);
  const residentsColumn = 9;

  function render() {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((planet, index) => (
              planet !== 'residents' ? <th key={ index }>{ planet }</th> : null
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((_, index) => (
            <tr key={ index }>
              {Object.entries(data[index]).map((planet, index2) => (
                index2 !== residentsColumn ? <td key={ index2 }>{ planet }</td> : null
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (loading === false) {
    return (
      <div>
        { render() }
      </div>
    );
  }
  return <p>loading</p>;
}

export default Table;
