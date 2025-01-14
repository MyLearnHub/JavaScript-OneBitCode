const numeros = [3, 7, 4, 9, 10, 3];

const pares = numeros.filter(function (elementoAtual) {
  return elementoAtual % 2 === 0;
});

const impares = numeros.filter(function (elementoAtual) {
  return elementoAtual % 2 !== 0;
});

console.log(numeros, pares);

const pessoas = [
  { id: 100, nome: "Isaac", idade: 28 },
  { id: 101, nome: "Lucas", idade: 20 },
  { id: 102, nome: "Juliana", idade: 30 },
  { id: 103, nome: "Guilherme", idade: 28 },
  { id: 104, nome: "Leonardo", idade: 30 },
];

let idadeMaxima = parseFloat(prompt("Escolha uma idade máxima:"));

const pessoasDentroDoLimite = pessoas.filter(function (pessoa) {
  return pessoa.idade <= idadeMaxima;
});

console.log(pessoasDentroDoLimite);

let nomePesquisado = prompt("Pesquisar por nome:");

const pessoaEncontrada = pessoas.find(function (pessoa) {
  return pessoa.nome === nomePesquisado;
});

console.log(pessoaEncontrada);

let idade = prompt("Pesquisar por idade:");

const pessoaEncontradaPorIdade = pessoas.find(function (pessoa) {
  return pessoa.idade == idade;
});

console.log(pessoaEncontradaPorIdade);