import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

function BodyTable() {
  const { data, search } = useContext(AppContext);

  if (search.length === 0) {
    return (
      <tbody>
        { data.map((infoPlanet) => (
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
        ))}
        ;
      </tbody>
    );
  } return (
    <tbody>
      { search.map((infoPlanet) => (
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
      ))}
      ;
    </tbody>
  );
}

export default BodyTable;
