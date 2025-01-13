let number = parseInt(prompt("Digite um número"));
let texto = "";

for (let i = 1; i <= 10; i++) {
  texto += `${number} x ${i} = ${number * i}`;
}

alert(texto);
