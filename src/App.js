import React, { useEffect, useState } from 'react';
import './App.css';

// import PlanetsContext from './contexts/PlanetsContext';
// import Search from './components/Search';

import testData from './testData';

const INITIAL_STATE = {
  data: testData,
};

function App() {
  // const planets = useContext(PlanetsContext) || { state: { data: testData } };
  const [text, setText] = useState('');
  const [state, setState] = useState(INITIAL_STATE);

  // console.log(state);
  useEffect(() => {
    global.fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1')
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setState((s) => ({ ...s, data: resData }));
      });
  }, []);

  const planets = { state, setState };
  const { count, results } = planets.state.data;

  ///

  let filteredPlanets;

  if (planets.state.filters) {
    const { name } = planets.state.filters.filterByName;

    filteredPlanets = results.filter((el) => el.name.includes(name));
  }

  const changeHandler = (e) => {
    setText(e.target.value);
    planets.setState({ ...planets.state,
      filters: {
        filterByName: {
          name: e.target.value,
        },
      },
    });
    // planets.addFilter(e.target.value);
  };

  // console.log(planets);

  fetch('');
  return (
    <>
      {/* <Search /> */}
      <input
        data-testid="name-filter"
        onChange={ changeHandler }
        type="text"
        value={ text }
      />
      <table style={ { width: '100%' } }>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>el.edited</th>
            <th>el.url</th>
          </tr>
        </thead>
        <tbody>
          { count > 0 && (
            (filteredPlanets || planets.state.data.results).map((el, i) => (
              <tr key={ i }>
                <td>{el.name}</td>
                <td>{el.rotation_period}</td>
                <td>{el.orbital_period}</td>
                <td>{el.diameter}</td>
                <td>{el.climate}</td>
                <td>{el.gravity}</td>
                <td>{el.terrain}</td>
                <td>{el.surface_water}</td>
                <td>{el.population}</td>
                <td>{el.films}</td>
                <td>{el.created}</td>
                <td>{el.edited}</td>
                <td>{el.url}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
