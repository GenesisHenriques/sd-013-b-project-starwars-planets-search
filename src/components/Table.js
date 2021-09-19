import React from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/Context';

function Table({ data }) {
  // console.log(data);
  // const header = Object.keys(data[0]);
  // console.log(header);
  const header = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  const planets = data.map((planet, index) => (
    <tr key={ index }>
      { Object.values(planet).map((element) => (
        <td key={ element }>{element}</td>
      ))}

    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => <th key={ item }>{item}</th>)}
        </tr>
        {/* <th>Name</th> */}

      </thead>
      <tbody>

        {planets}

      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Table;
