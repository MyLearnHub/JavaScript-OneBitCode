let count = 0;
let somaNotas = 0;
let nota;

do {
  nota = parseInt(prompt("Digite uma nota (ou -1 para sair):"));
  if (nota !== -1) {
    somaNotas += nota;
    count++;
  }
} while (nota !== -1);

if (count === 0) {
  alert("Nenhuma nota foi inserida.");
} else {
  let media = somaNotas / count;
  alert(`A média das notas é: ${media.toFixed(2)}`);
}
