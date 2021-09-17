import { useState, useEffect } from 'react';
import func from '../services';

const useFirstHook = () => {
  const globalState = {
    api: null,
    fullApi: null,
    bob: 'bob1',
    filters:
        {
          filterByName: {
            name: '',
          },
          filterByNumericValues: [
            {
              column: 'population',
              comparison: 'maior que',
              value: '0',
            },
          ],
        },
  };
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const apiFetch = async () => {
      setState({
        ...state,
        api: await func.fetchApi(),
        fullApi: await func.fetchApi(),
      });
    };
    if (!state.api || state.api.length < 1) {
      apiFetch();
    }
    // console.clear();
    // console.log('useFirstHook', state);
    // console.log('useFirstHook', state.filters.filterByNumericValues);
  });

  return [state, setState];
};

export default useFirstHook;
