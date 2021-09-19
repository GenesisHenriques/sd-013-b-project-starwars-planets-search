import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';
import Button from './Button';
import Select from './Select';

function Order() {
  const [disabled, setDisabled] = useState('none');
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const { handleSetOrder } = useContext(StarContext);

  const onVisible = () => {
    if (disabled === 'none') {
      setDisabled('inline');
    } else {
      setDisabled('none');
    }
  };

  const handleSelectColumn = ({ target: { name, value } }) => {
    setOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    handleSetOrder(order);
  };

  const selectionOne = {
    selectColumn: handleSelectColumn,
    filterColumn: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'films',
      'created',
      'edited',
      'url'],
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={ onVisible }>Exibir Ordernações</button>
      <nav>
        <form style={ { display: disabled } }>
          <Select
            dataTestId="column-sort"
            name="column"
            selection={ selectionOne }
          />
          <label htmlFor="ASC">
            <input
              id="ASC"
              type="radio"
              value="ASC"
              name="sort"
              onChange={ (e) => handleSelectColumn(e) }
              data-testid="column-sort-input-asc"
            />
            ASC
          </label>
          <label htmlFor="DESC">
            <input
              id="DESC"
              type="radio"
              value="DESC"
              name="sort"
              onChange={ (e) => handleSelectColumn(e) }
              data-testid="column-sort-input-desc"
            />
            DESC
          </label>
          <Button
            dataTestId="column-sort-button"
            onClick={ handleClick }
          >
            Adicionar Ordenação
          </Button>
        </form>
      </nav>
    </div>
  );
}

export default Order;
