// import { useCallback, useContext, useEffect } from 'react';
// import MainContext from '../context/MainContext';

// const functionComparison = (comparison, a, b) => {
//   switch (comparison) {
//   case 'maior que':
//     return Number(a) > Number(b);
//   case 'menor que':
//     return Number(a) < Number(b);
//   case 'igual a':
//     return Number(a) === Number(b);
//   default:
//     return true;
//   }
// };

// const useFilter = () => {
//   const { filters, data, hadlerFilterData } = useContext(MainContext);
//   const { filterByName: { name }, filterByNumericValues } = filters;

//   const filterArrayByName = useCallback(() => {
//     let arrayFiltered = data.filter(((planet) => (
//       planet.name
//         .toUpperCase()
//         .includes(name.toUpperCase())
//     )));

//     arrayFiltered = filterByNumericValues.length > 0
//       ? filterByNumericValues.reduce((acc, filter) => {
//         const { column, comparison, value } = filter;
//         console.log(filter);
//         acc = arrayFiltered
//           .filter((planet) => functionComparison(comparison, planet[column], value));
//         return acc;
//       }, arrayFiltered) : arrayFiltered;

//     hadlerFilterData(arrayFiltered);
//   }, [data, filterByNumericValues, hadlerFilterData, name]);

//   useEffect(() => {
//     filterArrayByName();
//   }, [filterArrayByName]);
// };

// export default useFilter;
