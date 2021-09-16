import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services/fetchAPI';
import Thead from './Thead';

export default function Table() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetchPlanets();
        // Aqui estou desestruturando o objeto com a chave results, vinda da API
        const { results } = await response.json();
        // Salvo o resultado no state planets, mas removendo a chave residents
        setPlanets(results.filter((item) => delete item.residents));
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);

  return (
    <table>
      <Thead />
      <tbody>
        {planets.map((item, index) => (
          <tr id={ index } key={ index }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
