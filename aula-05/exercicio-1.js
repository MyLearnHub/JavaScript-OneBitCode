const numerosEPesos = [
  { numero: 8, peso: 2 },
  { numero: 7, peso: 3 },
  { numero: 9, peso: 5 },
];

const somaPesos = numerosEPesos.reduce(
  (acumulado, atual) => acumulado + atual.peso,
  0
);
const somaPonderada = numerosEPesos.reduce(
  (acumulado, atual) => acumulado + atual.numero * atual.peso,
  0
);

const mediaPonderada = somaPonderada / somaPesos;
console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
