import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Table from '../Components/table';

function Home() {
  const { loading } = useContext(MyContext);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Table />
    </div>
  );
}

export default Home;
