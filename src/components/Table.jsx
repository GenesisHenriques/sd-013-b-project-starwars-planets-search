import React, { useContext } from 'react';
import PlanetContext from '../context/Context';
import '../App.css';

function Table() {
  const { isLoading, planetInfo } = useContext(PlanetContext); //
  return (
    isLoading
      && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(planetInfo.find((category) => category)) // get the keys from planetInfo which are different from 'residents'.
                .map((data, index) => (data !== 'residents' // if it hits, fills cell with data, if not, shows nothing.
                  ? <th className="table-th" key={ index }>{data}</th>
                  : undefined
                ))}
            </tr>
          </thead>
          <tbody>
            {planetInfo.map((planetData, p) => (
              <tr key={ p }>
                {Object.keys(planetData)
                  .map((info, index) => (info !== 'residents'
                    ? <td className="table-td" key={ index }>{planetData[info]}</td>
                    : undefined
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
  );
}

export default Table;
