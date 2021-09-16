import React from 'react';
import useStarwarsApi from '../hooks/useStarwarsApi';

function Home() {
  useStarwarsApi();
  return (
    <div>
      <h1>oi</h1>
      {/* <button type="button" onClick={() => test}>teste</button> */}

    </div>
  );
}

export default Home;
