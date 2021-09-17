import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, filters } = useContext(Context);
  const [filterData, setFilterData] = useState([]);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  let headers = [];
  if (data.length > 0) headers = Object.keys(data[0]);

  const dataFilteredByName = (nameInput) => {
    if (filterData.length > 0) return filterData;
    return data.filter((planet) => planet.name.toLowerCase().includes(nameInput));
  };

  useEffect(() => {
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      setFilterData(data.filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        return Number(planet[column]) === Number(value);
      }));
    });
  }, [filterByNumericValues, data]);

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header) => (
            <th key={ header }>{ header }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          dataFilteredByName(name).map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
