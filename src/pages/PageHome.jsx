import React from 'react';
import Table from '../components/Table';
import StarwarsAPI from '../services/StarWarsAPI';
import FormFilter from '../components/FormFilter';

export default function PageHome() {
  StarwarsAPI();

  return (
    <div>
      <FormFilter />
      <Table />
    </div>
  );
}
