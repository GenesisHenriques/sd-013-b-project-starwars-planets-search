import React, { useContext } from 'react';
import Context from '../context/Context';
import Table from '../components/Table';

function Home() {
  const { data } = useContext(Context);
  return <Table data={ data } />;
}

export default Home;
