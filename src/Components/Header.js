import React, { useContext, useEffect } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Header() {
  const { fetchAPI } = useContext(PlanetContext);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <h1>StarWars Planets</h1>
  );
}

export default Header;
