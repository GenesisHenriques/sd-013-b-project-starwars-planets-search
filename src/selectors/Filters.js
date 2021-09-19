import React, { useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import StarContext from '../context/StarContext';

function Filters({ optionsState }) {
  const [disabled, setDisabled] = useState('none');
  const { optionColumn, recoveredOption } = optionsState;
  const {
    data: { data },
    filters: { filterByNumericValues },
    handleSetData,
    handleNewFilterNumeric,
  } = useContext(StarContext);

  const onVisible = () => {
    if (disabled === 'none') {
      setDisabled('inline');
    } else {
      setDisabled('none');
    }
  };

  const handleClick = useCallback(({ target: { value } }) => {
    handleSetData(data);

    const newFilters = filterByNumericValues.filter(({ column }) => column !== value);
    handleNewFilterNumeric(newFilters);

    recoveredOption([...optionColumn, value]);
  }, [
    data,
    filterByNumericValues,
    handleNewFilterNumeric, handleSetData, optionColumn, recoveredOption]);

  return (
    <div className="dropdown">
      <button type="button" onClick={ onVisible }>Exibir Filtros</button>
      <nav>
        <div style={ { display: disabled } }>
          {
            filterByNumericValues.length > 0
            && filterByNumericValues.map(({ column }, index) => (
              <p
                data-testid="filter"
                key={ index }
              >
                { column }
                <button type="button" value={ column } onClick={ handleClick }>X</button>
              </p>
            ))
          }
        </div>
      </nav>
    </div>
  );
}

Filters.propTypes = {
  optionsState: PropTypes.objectOf(String),
};

Filters.defaultProps = {
  optionsState: {},
};

export default Filters;
