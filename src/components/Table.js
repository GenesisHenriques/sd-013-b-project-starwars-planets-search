import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const planets = useContext(Context);
  const planetsCopy = { ...planets };
  if (Object.keys(planetsCopy).length > 0 && planetsCopy[0].residents) {
    const keys = Object.keys(planetsCopy);
    keys.forEach((x) => delete planetsCopy[x].residents);
  }

  const renderHeader = () => {
    if (Object.keys(planetsCopy).length > 0) {
      const keys = Object.keys(planetsCopy[0]);
      return keys.map((x) => <th key={ x }>{x}</th>);
    } return <td>Loading Header...</td>;
  };

  const renderLine = (x) => {
    const keys = Object.keys(x);
    return keys.map((key) => <td key={ `${x}${key}` }>{x[key]}</td>);
  };

  const renderBody = () => {
    if (Object.keys(planetsCopy).length > 0) {
      const keys = Object.keys(planetsCopy);
      return keys.map((x) => <tr key={ `${x}line` }>{renderLine(planetsCopy[x])}</tr>);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {renderHeader()}
          </tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </div>);
};

export default Table;
