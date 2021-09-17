import React from 'react';
import './App.css';

// import PlanetsContext from './context/PlanetsContext';

import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Filters from './components/Filters';

// import testData from './testData';

// const INITIAL_STATE = {
//   data: testData,
// };

function App() {
  // const planets = useContext(PlanetsContext) || { state: { data: testData } };
  // const planets = useContext(PlanetsContext);
  // const [text, setText] = useState('');
  // const [state, setState] = useState(INITIAL_STATE);

  // // console.log(state);
  // useEffect(() => {
  //   global.fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1')
  //     .then((res) => res.json())
  //     .then((resData) => {
  //       console.log(resData);
  //       setState((s) => ({ ...s, data: resData }));
  //     });
  // }, []);

  // // const planets = { state, setState };
  // const { count, results } = planets.state.data;

  // ///

  // let filteredPlanets;

  // if (planets.state.filters) {
  //   const { name } = planets.state.filters.filterByName;

  //   filteredPlanets = results.filter((el) => el.name.includes(name));
  // }

  // const changeHandler = (e) => {
  //   setText(e.target.value);
  //   planets.setState({ ...planets.state,
  //     filters: {
  //       filterByName: {
  //         name: e.target.value,
  //       },
  //     },
  //   });
  //   // planets.addFilter(e.target.value);
  // };

  // console.log(planets);

  // fetch('');
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
