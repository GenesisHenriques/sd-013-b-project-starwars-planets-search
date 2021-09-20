import React from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Filter />
      <Table />
    </PlanetProvider>
  );
}
export default App;

/* Atente para a sintaxe quando se utiliza um Consumer . Um componente consumer deve receber como children uma função. Essa função recebe como parâmetro o valor passado na prop value do Provider (nos exemplos acima, também chamamos o parâmetro da função de value , mas poderia ser qualquer nome) e deve retornar algo a ser renderizado. Esse ponto é muito importante, então certifique-se de compreendê-lo bem. */
