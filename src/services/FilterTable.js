import { useContext } from 'react';
import MyContext from '../MyContext/MyContext';

export default function FilterTable(results) {
  const value = useContext(MyContext);
  // const { name } = value.filters.filterByName;
  const { filterByNumericValues } = value.filters;

  const newArray = filterByNumericValues.map((objFilter) => results.filter((objResult) => {
    const chave = objFilter.colum;
    const valor = objFilter.value;
    console.log(objResult);
    const comparacao = objFilter.comparsion;
    if (comparacao === 'maior que') {
      return objFilter.value < objResult[chave];
    }

    if (comparacao === 'menor que') {
      return objFilter.value > objResult[chave];
    }
    return objFilter.value === objResult[chave];
  }));

  console.log(newArray);
  return newArray[0];
}
