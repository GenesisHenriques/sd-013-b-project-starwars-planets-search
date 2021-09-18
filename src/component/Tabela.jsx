// import React, { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

// const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Tabela() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function handelApi() {
  //     const fetchApi = await fetch(url);
  //     const { results } = await fetchApi.json();
  //     results.map((result) => delete result.residents);
  //     console.log(results);
  //     setData(results);
  //   }
  //   handelApi();
  // }, []);
  const {
    data,
    planet: { filters: { filterByName: { name } } } } = useContext(DataContext);
  return (
    <span>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        {data.filter((item) => item.name.toLowerCase()
          .includes(name.toLowerCase()))
          .map((result) => (
            <tbody key={ result.name }>
              <tr>
                <td>{result.name}</td>
                <td>{result.rotation_period}</td>
                <td>{result.orbital_period}</td>
                <td>{result.diameter}</td>
                <td>{result.climate}</td>
                <td>{result.gravity}</td>
                <td>{result.terrain}</td>
                <td>{result.surface_water}</td>
                <td>{result.population}</td>
                <td>{result.films}</td>
                <td>{result.created}</td>
                <td>{result.edited}</td>
                <td>{result.url}</td>
              </tr>
            </tbody>
          ))}
      </table>

    </span>
  );
}

export default Tabela;
