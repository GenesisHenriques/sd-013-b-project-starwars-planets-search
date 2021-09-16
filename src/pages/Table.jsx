import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Input from '../components/Input';
import './Table.css';
import Filtered from '../components/Filter';

function Table() {
  const { data, filterByName, handleClickSearch, selectCollum,
    selectNumber, inputNumber, switchh } = useContext(PlanetsContext);
  if (data === undefined) {
    return <p>Loading...</p>;
  }
  const filteredByName = filterByName(data);
  // const dataFinal = arrayFiltered === undefined ? data : arrayFiltered;

  return (
    <fieldset>
      <Input />
      <button
        data-testid="button-filter"
        onClick={ () => handleClickSearch(data, selectCollum, selectNumber, inputNumber) }
        type="button"
      >
        Button
      </button>
      <table className="table">
        <thead>
          <tr>
            {data.length !== 0 && Object.keys(data[0])
              .filter((element) => element !== 'residents')
              .map((element, index) => (
                <th className="th" key={ index }>{element}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {switchh === false ? filteredByName.map((element) => (
            <tr key={ data.name }>
              <td className="tr">{element.name}</td>
              <td className="tr">{element.rotation_period}</td>
              <td className="tr">{element.orbital_period}</td>
              <td className="tr">{element.diameter}</td>
              <td className="tr">{element.climate}</td>
              <td className="tr">{element.gravity}</td>
              <td className="tr">{element.terrain}</td>
              <td className="tr">{element.surface_water}</td>
              <td className="tr">{element.population}</td>
              <td className="tr">{element.films}</td>
              <td className="tr">{element.created}</td>
              <td className="tr">{element.edited}</td>
              <td className="tr">{element.url}</td>
            </tr>
          )) : <Filtered />}
        </tbody>
      </table>
    </fieldset>
  );
}

export default Table;
