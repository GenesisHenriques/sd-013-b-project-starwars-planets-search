import React, { useContext } from 'react';
import PlanetsContexts from '../../context/PlanetsContext';

export default function BodyTable() {
  const { data, filters: { filterByName: { name } } } = useContext(PlanetsContexts);

  const getNewData = (filter) => {
    // Essa função filtra com base no 'filters' que eu estou trazndo do stado global
    const newData = data.filter((planet) => planet.name.includes(filter));
    return newData;
  };

  return (
    <tbody>
      {
        // Aqui eu pego o retorno da função e uso para criar os itens
        getNewData(name).map((planet) => (
          // tabelas - https://www.delftstack.com/pt/howto/javascript/create-table-javascript/#:~:text=Para%20criar%20um%20elemento%20HTML,createElement('table')%20.
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
  );
}
