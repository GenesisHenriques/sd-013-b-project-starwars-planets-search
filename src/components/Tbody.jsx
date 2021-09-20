import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../MyContext/MyContext';
import FilterTable from '../services/FilterTable';

export default function Tbody({ results }) {
  const value = useContext(MyContext);
  const { name } = value.filters.filterByName;
  const { filterByNumericValues } = value.filters;
  if (filterByNumericValues !== undefined && filterByNumericValues.length > 0) {
    const newTable = FilterTable(results);
    return (
      newTable.map((obj, index) => (
        <tr key={ index }>
          <td key={ obj.climate }>{obj.climate}</td>
          <td key={ obj.created }>{obj.created}</td>
          <td key={ obj.diameter }>{obj.diameter}</td>
          <td key={ obj.edited }>{obj.edited}</td>
          <td key={ obj.gravity }>{obj.gravity}</td>
          <td key={ obj.name }>{obj.name}</td>
          <td key={ obj.orbital_period }>{obj.orbital_period}</td>
          <td key={ obj.population }>{obj.population}</td>
          <td key={ obj.rotation_period }>{obj.rotation_period}</td>
          <td key={ obj.surface_water }>{obj.surface_water}</td>
          <td key={ obj.terrain }>{obj.terrain}</td>
          <td key={ obj.url }>{obj.url}</td>
          <td key={ obj.films[0] }>
            {obj.films.map((filme) => <li key={ filme }>{filme}</li>)}
          </td>
        </tr>))
    );
  }

  if (name !== '') {
    return (
      <tbody>
        {results.map((obj, index) => {
          if (obj.name.includes(name)) {
            return (
              <tr key={ index }>
                <td key={ obj.climate }>{obj.climate}</td>
                <td key={ obj.created }>{obj.created}</td>
                <td key={ obj.diameter }>{obj.diameter}</td>
                <td key={ obj.edited }>{obj.edited}</td>
                <td key={ obj.gravity }>{obj.gravity}</td>
                <td key={ obj.name }>{obj.name}</td>
                <td key={ obj.orbital_period }>{obj.orbital_period}</td>
                <td key={ obj.population }>{obj.population}</td>
                <td key={ obj.rotation_period }>{obj.rotation_period}</td>
                <td key={ obj.surface_water }>{obj.surface_water}</td>
                <td key={ obj.terrain }>{obj.terrain}</td>
                <td key={ obj.url }>{obj.url}</td>
                <td key={ obj.films[0] }>
                  {obj.films.map((filme) => <li key={ filme }>{filme}</li>)}
                </td>
              </tr>);
          }
          return undefined;
        })}
      </tbody>
    );
  }

  return (
    <tbody>
      {results.map((obj, index) => (
        <tr key={ index }>
          <td key={ obj.climate }>{obj.climate}</td>
          <td key={ obj.created }>{obj.created}</td>
          <td key={ obj.diameter }>{obj.diameter}</td>
          <td key={ obj.edited }>{obj.edited}</td>
          <td key={ obj.gravity }>{obj.gravity}</td>
          <td key={ obj.name }>{obj.name}</td>
          <td key={ obj.orbital_period }>{obj.orbital_period}</td>
          <td key={ obj.population }>{obj.population}</td>
          <td key={ obj.rotation_period }>{obj.rotation_period}</td>
          <td key={ obj.surface_water }>{obj.surface_water}</td>
          <td key={ obj.terrain }>{obj.terrain}</td>
          <td key={ obj.url }>{obj.url}</td>
          <td key={ obj.films[0] }>
            {obj.films.map((filme) => <li key={ filme }>{filme}</li>)}
          </td>
        </tr>))}

    </tbody>
  );
}

Tbody.propTypes = {
  results: PropTypes.arrayOf.isRequired,
};
