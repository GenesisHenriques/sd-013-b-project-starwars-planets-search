import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filtered() {
  const { arrayFiltered } = useContext(PlanetsContext);
  return (
    <div>
      {arrayFiltered.length !== 0 && arrayFiltered.map((element, index) => (
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
    </div>
  );
}

export default Filtered;
