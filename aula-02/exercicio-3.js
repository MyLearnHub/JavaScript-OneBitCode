const base = parseInt(prompt("Digite a base:"));
const altura = parseInt(prompt("Digite a altura:"));
const ladoA = parseInt(prompt("Digite o primeiro lado:"));
const ladoB = parseInt(prompt("Digite o segundo lado:"));
const ladoC = parseInt(prompt("Digite o terceiro lado:"));

const area = (base * altura) / 2;
const perimetro = ladoA + ladoB + ladoC;

alert(`Área: ${area}`);
alert(`Perímetro: ${perimetro}`);
