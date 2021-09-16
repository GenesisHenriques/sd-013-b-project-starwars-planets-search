import React, { useContext } from 'react';
import MyContext from '../MyContext/MyContext';
import Tbody from './Tbody';

export default function Table() {
  const value = useContext(MyContext);
  const { results } = value.data;
  console.log(results);

  // function ResultsLoading() {
  //   if (results === undefined) {
  //     return <tr><td>carregando</td></tr>;
  //   }
  //   return (
  //     <Tbody results={ results } />
  //   );
  // }

  if (results === undefined) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>Surface_Water</th>
            <th>Terrain</th>
            <th>Url</th>
            <th>films</th>
          </tr>
        </thead>
        <Tbody results={ results } />
      </table>
    </div>
  );
}
