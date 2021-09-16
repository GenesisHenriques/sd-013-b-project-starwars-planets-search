import React, { useContext, useEffect } from 'react';

import MainContext from '../context/MainContext';

function Header() {
  const { fetchPlanets } = useContext(MainContext);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <h1>StarWars Planets</h1>
  );
}

export default Header;
