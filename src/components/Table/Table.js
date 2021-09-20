import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const Table = () => {
  // const [isDataFetching, setIsDataFetching] = useState(false);
  const { data } = useContext(PlanetsContext);
  const { results } = data;

  const planetsData = results.map((planetData) => delete planetData.residents);
  console.log(planetsData);

  const content = <h2>Loading data...</h2>;

  if (!results) {
    return content;
  }

  return (
    <h1>Teste</h1>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>teste</th>
    //       <th>teste</th>
    //     </tr>
    //   </thead>
    // </table>
  );
};

export default Table;
