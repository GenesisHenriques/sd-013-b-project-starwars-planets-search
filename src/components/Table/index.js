import React from 'react';
import Table from 'react-bootstrap/Table';

import { useTableContext } from '../../context';

export default function PlanetsTable() {
  const { data, loading } = useTableContext();
  const tableHeaders = !loading && Object.keys(data[0])
    .map((title) => title.replace('_', ' '));

  if (loading) return <p>loading...</p>;

  return (
    <Table responsive="sm" striped bordered hover variant="dark">
      <thead>
        <tr>
          {tableHeaders.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
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
