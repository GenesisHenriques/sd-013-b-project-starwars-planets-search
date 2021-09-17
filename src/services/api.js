const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const IMAGE_URL = {
  Tatooine: 'https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png',
  Alderaan: 'https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg',
  Yavin: 'https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png',
  Hoth: 'https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png',
  Dagobah: 'https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg',
  Bespin: 'https://static.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png',
  Endor: 'https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png',
  Naboo: 'https://static.wikia.nocookie.net/starwars/images/4/41/Naboo_FFGRebellion.png',
  Coruscant: 'https://static.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg',
  Kamino: 'https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg',
};

export const fetchPlanets = () => (
  fetch(URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

// export default async function fetchPlanets() {
//   const response = await fetch(URL);
//   const response1 = await response.json();
//   return response1.results;
// }
