import React, { useMemo, useContext } from 'react';
import { useTable } from 'react-table';
import columns from './columns';
import StarContext from '../Context/StarContext';

const BasicTable = () => {
  const { data, loading } = useContext(StarContext);
  const COLUMNS = useMemo(() => columns, []);
  const DATA = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns: COLUMNS,
    data: DATA,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  if (loading === true) {
    return <h2>loading...</h2>;
  }
  return (
    <table { ...getTableProps() }>
      <thead>
        {
          headerGroups.map((headerGroup, index1) => (
            <tr key={ index1 } { ...headerGroup.getHeaderGroupProps() }>
              {
                headerGroup.headers.map((column, index2) => (
                  <th key={ index2 } { ... column.getHeaderProps() }>{column.render('Header')}</th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody { ...getTableBodyProps }>
        {
          rows.map((row, index3) => {
            prepareRow(row);
            return (
              <tr key={ index3 }>
                {
                  row.cells.map((cell, index4) => <td key={ index4 } { ...cell.getCellProps() }>{cell.render('cell')}</td>)
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default BasicTable;
