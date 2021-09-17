import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Input from '../controlled components/Input';

function Filter() {
  const { setFilter } = useContext(PlanetContext);

  const handleFilter = ({ target: { value } }) => {
    setFilter({
      filter: {
        name: value,
      },
    });
  };

  return (
    <div>
      <Input
        text="Search"
        type="text"
        name="search-name"
        testId="name-filter"
        handleChange={ handleFilter }
      />
    </div>
  );
}

export default Filter;
