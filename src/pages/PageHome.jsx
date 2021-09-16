import React from 'react';
import Table from '../components/Table';
import StarwarsAPI from '../services/StarWarsAPI';

export default function PageHome() {
  StarwarsAPI();

  return (
    <Table />
  );
}
