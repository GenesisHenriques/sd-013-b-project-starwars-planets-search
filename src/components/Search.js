import React, { useState, useContext } from 'react';

import { PlanetsContext } from '../contexts/PlanetsProvider';

const Search = () => {
  const [text, setText] = useState('');
  const planets = useContext(PlanetsContext);

  console.log('aa', planets);

  const changeHandler = (e) => {
    setText(e.target.value);
    planets.addFilter(e.target.value);
  };

  // console.log(text);

  return (
    <>
      <h1>ABC</h1>
      <input
        data-testid="name-filter"
        onChange={ changeHandler }
        type="text"
        value={ text }
      />
    </>
  );
};

export default Search;
