import React, { useContext, useEffect } from 'react';
import AppContext from '../Contexts/AppContext';

function BodyTable() {
  const { data, search, selectSearch, setSelect, filters } = useContext(AppContext);
  const { filterByNumericValues } = filters;

  // Update
  useEffect(() => {
    const selectComparison = () => {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        setSelect(data.filter((info) => {
          switch (comparison) {
          case 'Maior que':
            return Number(info[column]) > Number(value); // Utilizando Number() para converter em valor numérico: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
          case 'Menor que':
            return Number(info[column] < Number(value));
          default:
            return Number(info[column]) === Number(value);
          }
        }));
        // console.log(setSelect);
      });
    };
    selectComparison();
  }, [filterByNumericValues, setSelect, data]);

  const mapTr = (param) => (param.map((infoPlanet) => (
    <tr key={ infoPlanet.name }>
      <td>{ infoPlanet.name }</td>
      <td>{ infoPlanet.rotation_period }</td>
      <td>{ infoPlanet.orbital_period }</td>
      <td>{ infoPlanet.diameter }</td>
      <td>{ infoPlanet.climate }</td>
      <td>{ infoPlanet.gravity }</td>
      <td>{ infoPlanet.terrain }</td>
      <td>{ infoPlanet.surface_water }</td>
      <td>{ infoPlanet.population }</td>
      <td>{ infoPlanet.films }</td>
      <td>{ infoPlanet.created }</td>
      <td>{ infoPlanet.edited }</td>
      <td>{ infoPlanet.url }</td>
    </tr>
  )));

  if (selectSearch.length) {
    return (
      <tbody>
        { mapTr(selectSearch)}
      </tbody>
    );
  }
  if (search.length === 0) {
    return (
      <tbody>
        { mapTr(data)}
      </tbody>
    );
  }
  return (
    <tbody>
      { mapTr(search)}
    </tbody>
  );
}

export default BodyTable;
