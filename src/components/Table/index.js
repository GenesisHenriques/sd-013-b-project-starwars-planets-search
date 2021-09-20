import React from 'react';
import Table from 'react-bootstrap/Table';

import { useTableContext } from '../../context/TableProvider';

export default function PlanetsTable() {
  const { data, loading, filteredData, filters } = useTableContext();

  const tableHeaders = !loading && Object.keys(data[0])
    .map((title) => title.replace('_', ' '));

  const currentPlanets = filteredData.length > 0 ? filteredData : data;

  if (loading) return <p>loading...</p>;
  if (filteredData.length < 1
    && filters.filters.filterByName.name !== '') return <p>Planeta nao existente</p>;

  return (
    <Table responsive="sm" striped bordered hover variant="dark">
      <thead>
        <tr>
          {tableHeaders.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {currentPlanets.map((planet) => (
          <tr key={ planet.name }>
            {(Object.values(planet).map((planetInformation) => (
              <td key={ planetInformation }>{ planetInformation }</td>
            )))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
