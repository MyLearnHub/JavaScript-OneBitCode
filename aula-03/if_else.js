const idade = parseFloat(prompt("Quantos anos você tem?"));

if (idade >= 18) {
  console.log("Você é maior de idade");
} else if (idade >= 12) {
  console.log("Você é menor de idade");
} else {
  console.log("Você ainda tem menos de 12 anos");
}
