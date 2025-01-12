let count = 0;
let somaNotas = 0;

while (true) {
  let entrada = parseInt(prompt("Digite uma nota (ou -1 para sair):"));

  if (entrada === -1) {
    break;
  }

  somaNotas += entrada;
  count++;
}

let media = somaNotas / count;
alert(`A média das notas é ${media.toFixed(2)}`);
