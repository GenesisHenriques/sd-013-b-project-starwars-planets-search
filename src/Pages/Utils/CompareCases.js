export default function compareCases(str, filterValue, planetValue) {
  console.log(str, filterValue, planetValue);
  switch (str) {
  case 'menor que':
    return filterValue > planetValue;

  case 'igual a':
    return filterValue === planetValue;

  default:
    return filterValue < planetValue;
  }
}
