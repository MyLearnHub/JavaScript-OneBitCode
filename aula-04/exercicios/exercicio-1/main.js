import { dobro } from "./funcoes.js";

let number = parseFloat(prompt("Digite um número"));

if (isNaN(number)) {
  alert(`O dobro de ${number} é ${dobro(number)}`);
} else {
  alert("Por favor, insira um número valido.");
}
