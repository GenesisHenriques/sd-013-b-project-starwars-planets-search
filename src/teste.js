const array = [
  {
    nome: 'Guilherme',
    idade: 10,
  },
  {
    nome: 'Angela',
    idade: 10,
  },
  {
    nome: 'Gilson',
    idade: 10,
  },
  {
    nome: 'Adelmo',
    idade: 10,
  },
];

const filtered = array.filter((clients) => clients.nome.includes(''));
console.log(filtered);
