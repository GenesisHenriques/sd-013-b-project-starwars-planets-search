import React from 'react';

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

class Tabela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handelApi = this.handelApi.bind(this);
  }

  componentDidMount() {
    this.handelApi();
  }

  async handelApi() {
    const fetchApi = await fetch(url);
    const response = await fetchApi.json();
    response.results.map((result) => delete result.residents);
    // console.log(response);
    this.setState({ data: response.results });
  }

  render() {
    const { data } = this.state;
    return (
      <span>
        <table border="1">
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
              <th>edited</th>
              <th>url</th>
            </tr>
          </thead>
          {data.map((result) => (
            <tbody key={ result.name }>
              <tr>
                <td>{result.name}</td>
                <td>{result.rotation_period}</td>
                <td>{result.orbital_period}</td>
                <td>{result.diameter}</td>
                <td>{result.climate}</td>
                <td>{result.gravity}</td>
                <td>{result.terrain}</td>
                <td>{result.surface_water}</td>
                <td>{result.population}</td>
                <td>{result.films}</td>
                <td>{result.created}</td>
                <td>{result.edited}</td>
                <td>{result.url}</td>
              </tr>
            </tbody>
          ))}
        </table>

      </span>
    );
  }
}

export default Tabela;
