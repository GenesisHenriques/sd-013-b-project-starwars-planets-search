import variable from '../global';

const byKey = (param, param2, param3) => ({ ...param, [param2]: param3 });

const byTargetValue = (param, param2, param3) => {
  const [key] = Object.entries(param).filter((e) => e[1] === param2);
  return {
    ...param,
    [key[0]]: param3.target.value,
  };
};

const fetchApi = async () => {
  const getApi = await fetch(variable.apiUrl);
  const { results } = await getApi.json();
  console.log('I am fetchApi function: ', results);
  return results;
};

const services = {
  byKey,
  byTargetValue,
  fetchApi,
};

export default services;
