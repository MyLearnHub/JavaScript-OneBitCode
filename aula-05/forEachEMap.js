const numeros = [3, 7, 4, 9, 10, 3];

function mostrarElementos(elementoAtual, indiceAtual, arrayCompleto) {
  console.log(`O elemento no índice ${indiceAtual} é ${elementoAtual}`);
}

// numeros.forEach(mostrarElementos);

function paraCada(array, funcaoParaExecutar) {
  for (let i = 0; i < array.length; i++) {
    funcaoParaExecutar(array[i], i, array);
  }
}

paraCada(numeros, mostrarElementos);

const dobroDosNumeros = numeros.map(function (
  elementoAtual,
  indiceAtual,
  arrayOriginal
) {
  console.log(`índice: ${indiceAtual} | valor: ${elementoAtual}`);
  return {
    dobro: elementoAtual * 2,
    metade: elementoAtual / 2,
    valorOriginal: elementoAtual,
  };
});

console.log(dobroDosNumeros);
