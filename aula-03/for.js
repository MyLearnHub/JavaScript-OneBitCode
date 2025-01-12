let numero = parseFloat(prompt("Escolha um número"));
alert("O número é " + numero);

// parte 1: código executado antes da condição
// parte 2: verificação da condição
// parte 3: código executado após o bloco do for
for (let i = 0; numero > i; i++) {
  alert(`${numero} é maior do que i - i = ${i}`);
}

for (alert("preparação inicial"); numero > i; alert("código após o bloco")) {
  alert(`${numero} é maior do que i - i = ${i}`);
  i++;
}

for (let i = 0; i < 10; i++) {
  console.log("A variável i vale " + i);

  if (i === 5) {
    console.log("condição atendida");
    break;
  }
}
