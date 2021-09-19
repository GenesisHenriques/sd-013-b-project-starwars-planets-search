import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';
import Select from './Select';

function Order() {
  const [disabled, setDisabled] = useState('none');

  const {
    data: { data },
    filters: { dataFiltered },

  } = useContext(StarContext);

  const onVisible = () => {
    if (disabled === 'none') {
      setDisabled('inline');
    } else {
      setDisabled('none');
    }
  };

  const selectionOne = {
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
        <div style={ { display: disabled } }>
          <Select
            dataTestId="column-sort"
            name="column"
            selection={ selectionOne }
          />
        </div>
      </nav>
    </div>
  );
}

export default Order;
