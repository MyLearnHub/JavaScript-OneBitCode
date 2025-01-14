let pessoa = {
  idade: 28,
  nome: "Isaac",
  endereco: {
    rua: "qualquer coisa",
    numero: "101",
  },
  ola: function () {
    console.log(`Olá, mundo! Aqui é o ${this.nome}`);
  },
};

console.log(pessoa.nome);
console.log(pessoa.endereco);
console.log(pessoa.endereco.rua);

pessoa.nome = "Lucas";

console.log(pessoa);

pessoa.telefone = "1198765432";

console.log(pessoa);

pessoa.ola();

let calculadora = {
  x: 5,
  y: 9,
  somar: function () {
    alert(this.x + this.y);
  },
};

calculadora.somar();
calculadora.x = 50;
calculadora.somar();
