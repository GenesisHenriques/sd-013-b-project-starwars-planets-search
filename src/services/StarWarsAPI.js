export default async function GetApi() {

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const response = await fetch(url);
const json = await response.json();

return json;

}
