import React, { useContext } from 'react';
import Context from '../../context/Context';
import func from '../../services';

function Erasefilters() {
  const { state, setState } = useContext(Context);
  return (
    <div>
      <div data-testid="filter">
        <button
          onClick={ () => setState(func.eraseFilters(state)) }
          type="button"
        >
          X
        </button>
      </div>
      <div data-testid="filter">
        <button
          onClick={ () => setState(func.eraseFilters(state)) }
          type="button"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Erasefilters;
