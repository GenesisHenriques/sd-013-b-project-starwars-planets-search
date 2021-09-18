import React from 'react';
import SearchByNameInput from './SearchByNameInput';
import SearchByNumericInput from './SearchByNumericInput';

function SearchForm() {
  return (
    <>
      <SearchByNameInput />
      <SearchByNumericInput />
    </>
  );
}

export default SearchForm;
