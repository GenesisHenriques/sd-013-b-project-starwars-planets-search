import React from 'react';
import TableData from './TableData';
import TableHead from './TableHead';

function Table() {
  return (
    <div>
      <table>
        <thead>
          <TableHead />
        </thead>
        <TableData />
      </table>
    </div>
  );
}

export default Table;
