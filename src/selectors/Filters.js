import React, { useContext, useState, useCallback } from 'react';
import StarContext from '../context/StarContext';

function Filters() {
  const [disabled, setDisabled] = useState('none');

  const {
    data: { data },
    filters: { filterByNumericValues },
    handleSetData,
  } = useContext(StarContext);

  const onVisible = () => {
    if (disabled === 'none') {
      setDisabled('inline');
    } else {
      setDisabled('none');
    }
  };

  const handleClick = useCallback(() => {
    handleSetData(data);
  }, [data, handleSetData]);

  return (
    <div className="dropdown">
      <button type="button" onClick={ onVisible }>Exibir Filtros</button>
      <left>
        <div style={ { display: disabled } }>
          {
            filterByNumericValues.length > 0
            && filterByNumericValues.map(({ column }, index) => (
              <p
                data-testid="filter"
                key={ index }
              >
                { column }
                <button type="button" onClick={ handleClick }>X</button>
              </p>
            ))
          }
        </div>
      </left>
    </div>
  );
}

export default Filters;
