import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, planets, filters } = useContext(Context);
  if (!data.length) return <div>loading...</div>;

  const tableHeadContent = Object.keys(data[0]);
  const residentsIndex = tableHeadContent.indexOf('residents');
  tableHeadContent.splice(residentsIndex, 1);

  const filterPlanets = () => {
    const { filterByName, filterByNumericValues } = filters;
    let filteredPlanets = planets.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));

    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {

        if (comparison === 'igual a') {
          filteredPlanets = filteredPlanets.filter((planet) => (
            planet[column] === value));
        }

        if (comparison === 'menor que') {
          filteredPlanets = filteredPlanets.filter((planet) => (
            planet[column] < Number(value)));
        }
        if (comparison === 'maior que') {
          filteredPlanets = filteredPlanets.filter((planet) => (
            planet[column] > Number(value)));
        }
      });
      // const { column, comparison, value } = filterByNumericValues[0];

    }

    return filteredPlanets;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            { tableHeadContent.map((key) => <th key={ key }>{ key }</th>) }
          </tr>
        </thead>
        <tbody>
          { filterPlanets().map((planet) => (
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
