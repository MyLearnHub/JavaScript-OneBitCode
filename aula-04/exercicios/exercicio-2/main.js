import { dobro, somar, subtrair } from "./funcoes.js";

do {
  let escolha = parseInt(prompt(`Digite uma opção:
    1. Dobro
    2. Somar
    3. Subtrair
    -1. Sair`));

  if (escolha === 1) {
    let number = parseInt(prompt("Digite um número"));
    alert(`O dobro de ${number} é ${dobro(number)}`);
  } else if (escolha === 2) {
    let number1 = parseInt(prompt("Digite o primeiro número"));
    let number2 = parseInt(prompt("Digite o segundo número"));
    alert(`A soma dos dois números é ${somar(number1, number2)}`);
  } else if (escolha === 3) {
    let number1 = parseInt(prompt("Digite o primeiro número")); 
    let number2 = parseInt(prompt("Digite o segundo número"));
    alert(`A subtração dos dois números é ${subtrair(number1, number2)}`);
  }
} while (escolha !== -1);
