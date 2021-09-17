import React from 'react';
import FilterNameInput from '../components/FilterNameInput';
import FilterNumberSelect from '../components/FIlterNumberSelect';
import Table from '../components/Table';

export default function Home() {
  return (
    <>
      <h1> Star Wars Planets Database</h1>
      <FilterNameInput />
      <FilterNumberSelect />
      <Table />
    </>
  );
}
