import { useState, useEffect } from 'react';
import func from '../services';

const useFirstHook = () => {
  const globalState = {
    api: null,
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
              value: '100000',
            },
          ],
        },
  };
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const apiFetch = async () => {
      setState({ ...state, api: await func.fetchApi() });
    };
    if (!state.api || state.api.length < 1) {
      apiFetch();
    }
    // console.log('hello', state);
  });

  return [state, setState];
};

export default useFirstHook;
