import React, { useContext } from 'react';
import PlanetContext from '../context/Context';
import '../App.css';

function Table() {
  const { isLoading, planets } = useContext(PlanetContext);

  return (
    isLoading
      && (
        <table className="table">
          <thead>
            <tr className="table-th">
              {Object.keys(planets[0])
                .map((planet, diameter) => <th key={ diameter }>{planet}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              planets.map((planet, diameter) => (
                <tr key={ diameter }>
                  { Object.values(planet)
                    .map((info) => <td className="table-td" key={ info }>{ info }</td>) }
                </tr>))
            }

          </tbody>
        </table>
      )
  );
}

export default Table;
