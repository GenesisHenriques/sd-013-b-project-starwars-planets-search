import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function Body() {
  const { data } = useContext(Context);
  const { filters } = useContext(Context);
  const { filterByName: { name }, filterByNumericValues } = filters;

  const filterData = () => {
    let planetsData = [...data];

    // A lógica a seguir foi extraida deste tutorial
    // Fonte: https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=326s

    if (name !== '') {
      const lowerCaseName = name.toLowerCase();
      planetsData = planetsData
        .filter((planet) => planet.name.toLowerCase().includes(lowerCaseName));
    }

    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          planetsData = planetsData.filter((planet) => +planet[column] > +value);
        } else if (comparison === 'menor que') {
          planetsData = planetsData.filter((planet) => +planet[column] < +value);
        } else {
          planetsData = planetsData.filter((planet) => +planet[column] === +value);
        }
      });
      return planetsData;
    }

    return planetsData;
  };

  // Forma mais clean e eficiente para chamar as colunas da API
  const getColumns = (data.length > 0)
   && Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <tbody>
      { filterData().map((planet) => (
        <tr key={ planet.name }>
          { getColumns.map((column) => <td key={ column }>{ planet[column] }</td>)}
        </tr>
      ))}
    </tbody>
  );
}
