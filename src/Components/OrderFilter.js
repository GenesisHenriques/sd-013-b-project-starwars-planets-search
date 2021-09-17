/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import {
  compareNameAsc,
  compareNameDesc,
  compareOrbitalAsc,
  compareOrbitalDesc,
  comparePopulationAsc,
  comparePopulationDesc,
} from '../services/orderPlanets';

function OrderFilter() {
  const context = useContext(PlanetsContext);
  const { setOrderSort, data, setData } = context;
  const [orderBy, setOrderBy] = useState('name');
  const [orderForm, setOrderForm] = useState('ASC');

  const orderPlanets = (type, form) => {
    if (type === 'name') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(compareNameAsc));
      case 'DESC':
        return setData(data.sort(compareNameDesc));
      default:
        break;
      }
    }
    if (type === 'population') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(comparePopulationAsc));
      case 'DESC':
        return setData(data.sort(comparePopulationDesc));
      default:
        break;
      }
    }
    if (type === 'orbital_period') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(compareOrbitalAsc));
      case 'DESC':
        return setData(data.sort(compareOrbitalDesc));
      default:
        break;
      }
    }
  };

  const getOrderForm = () => {
    orderPlanets(orderBy, orderForm);
  };

  useEffect(() => {
    setOrderSort(orderBy, orderForm);
    getOrderForm();
  }, [data, getOrderForm, orderBy, orderForm, setOrderSort]);

  return (
    <div className="App">
      <h1>STAR WAR PLANET SEARCH</h1>
      <span>Order By:</span>
      <select
        onChange={ (event) => setOrderBy(event.target.value) }
        data-testid="column-sort"
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
      </select>
      <span>In a way:</span>
      <label htmlFor="asc">
        Ascendant
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          onChange={ (event) => setOrderForm(event.target.value) }
          id="asc"
          defaultChecked
          name="ordeBy"
          value="ASC"
        />
      </label>
      <label htmlFor="desc">
        Downward
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          onChange={ (event) => setOrderForm(event.target.value) }
          id="desc"
          defaultChecked
          name="ordeBy"
          value="DESC"
        />
        <button
          type="button"
          onClick={ getOrderForm }
          data-testid="column-sort-button"
        >
          Order Columns
        </button>
      </label>
    </div>
  );
}

export default OrderFilter;
