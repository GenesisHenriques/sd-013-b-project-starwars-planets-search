import { useState, useEffect } from 'react';
import func from '../services';

const useFirstHook = () => {
  const globalState = {
    api: null,
    bob: 'bob',
  };
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const apiFetch = async () => {
      setState({ ...state, api: await func.fetchApi() });
    };
    if (!state.api) {
      apiFetch();
    }
  });

  return [state, setState];
};

export default useFirstHook;
