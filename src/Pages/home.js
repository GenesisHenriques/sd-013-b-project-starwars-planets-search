import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Table from '../Components/table';
import FilterNames from '../Components/filterNames';

function Home() {
  const { loading } = useContext(MyContext);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <FilterNames />
      <Table />
    </div>
  );
}

export default Home;
