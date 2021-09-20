import React from 'react';

import PlanetsTable from '../../components/Table';
import TextFilterInput from '../../components/TextFilterInput';

export default function Home() {
  return (
    <>
      <TextFilterInput />
      <PlanetsTable />
    </>
  );
}
