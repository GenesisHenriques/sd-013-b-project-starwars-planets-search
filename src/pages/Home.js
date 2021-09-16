import React, { useContext } from 'react';
import Context from '../contexts/Context';
import Table from '../components/Table';

export default function Home() {
  const { data } = useContext(Context);
  return (
    data ? <Table data={ data } /> : <p>nao me carregaram aqui</p>
  );
}
