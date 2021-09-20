// Função criada para poder setar o state inicial de cada dropdown como primeiro item de cada Array do objeto filter(column ou comparison) no componente Select.jsx
// Eu a chamo (setInit) dentro do useState, passando como parâmetro o valor declarado como props(no caso o objeto params) vindo do componente Filter.jsx
export const setInit = (term) => (term === 'column' ? 'population' : 'maior que');

// Função para setar o valor do input dos planetas no estado global e do proprio componente
export const saveInputPlanets = (setLocal, setGlobal, target) => {
  setLocal(target.value);
  setGlobal(target.value);
};

// função para salvar os selects no estado global e no local
export const saveSelects = (
  setLocal,
  obj,
  target,
  param,
) => {
  setLocal(target.value);
  return setInit(param) === 'population'
    ? obj.setSelectColumn(target.value)
    : obj.setSelectComparison(target.value);
};
