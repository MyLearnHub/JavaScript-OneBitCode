const numeros = [];
const pesos = [];

while (true) {
  const numero = parseFloat(prompt("Digite um número (ou deixe em branco para encerrar):"));

  if (isNaN(numero)) {
    break;
  }

  const peso = parseFloat(prompt(`Digite o peso para o número ${numero}:`));

  if (isNaN(peso)) {
    break;
  } else {
    numeros.push(numero);
    pesos.push(peso);
  }
}

if(numeros.length === 0) {
  alert("Nenhum número inserido. Encerrando...");
} else {
  let somaNotas = 0;
  let somaPesos = 0;

  for (let i = 0; i < numeros.length; i++) {
    somaNotas += numeros[i] * pesos[i];
    somaPesos += pesos[i];
  }

  const mediaPonderada = somaNotas / somaPesos;

  alert(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
}
