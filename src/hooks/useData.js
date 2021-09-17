import { useState, useEffect } from 'react';

export default function useData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getPlanets() {
      const request = await fetch('https://swapi.dev/api/planets')
        .then((result) => result.json())
        .then((result) => result.results)
        .then((planets) => planets.map(({ residents, ...rest }) => ({ ...rest })));
      setData(request);
    }
    getPlanets();
  }, []);
  return [data];
}
