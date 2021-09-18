import React, { useContext } from 'react';
import Context from '../context/Context';
import sortList from '../services/sortList';
import handleFilter from '../services/handleFilter';

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
      filteredPlanets = handleFilter(filteredPlanets, filterByNumericValues);
    }
    return sortList(filteredPlanets, filters.order.sort, filters.order.column);
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
              {tableHeadContent.map((key, index) => {
                if (!index) {
                  return <td data-testid="planet-name" key={ index }>{ planet[key] }</td>;
                }
                return <td key={ index }>{ planet[key] }</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
