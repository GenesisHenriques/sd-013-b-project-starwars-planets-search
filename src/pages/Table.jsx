import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Input from '../components/Input';
import './Table.css';

function Table() {
  const
    { data,
      selectCollum,
      selectNumber,
      inputNumber,
      setToggleSearch,
      filteredArray,
    } = useContext(PlanetsContext);
  if (data === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <fieldset>
      <Input />
      <button
        data-testid="button-filter"
        onClick={ () => setToggleSearch((prevState) => !prevState) }
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
          {filteredArray(data, selectCollum, selectNumber, inputNumber)
            .map((element, index) => (
              <tr key={ index }>
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
            ))}
        </tbody>
      </table>
    </fieldset>
  );
}

export default Table;
