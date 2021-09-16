import React from 'react';
import PropTypes from 'prop-types';

export default function Tbody({ results }) {
  console.log(results);
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
