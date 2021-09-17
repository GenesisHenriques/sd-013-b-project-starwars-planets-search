import PropTypes from 'prop-types';
import React from 'react';
import fetchPlanets from '../services/api';
import PlanetsContext from './PlanetsContext';

class PlanetsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['a'],
      error: null,
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    try {
      const response = await fetchPlanets();

      this.setState({
        data: response.results,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider
        value={ { ...this.state, getPlanets: this.getPlanets } }
      >
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
