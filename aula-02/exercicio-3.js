const ladoA = parseFloat(prompt("Digite o primeiro lado:"));
const ladoB = parseFloat(prompt("Digite o segundo lado:"));
const ladoC = parseFloat(prompt("Digite o terceiro lado:"));

const perimetro = (ladoA + ladoB + ladoC) / 2;
const area = Math.sqrt(
  perimetro * (perimetro - ladoA) * (perimetro - ladoB) * (perimetro - ladoC)
);

alert(`Área: ${area}`);
alert(`Perímetro: ${perimetro}`);
