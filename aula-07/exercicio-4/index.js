function temporizador(tempo) {
  return new Promise((resolve) => setTimeout(resolve, tempo));
}

async function gerarNumeroAleatorio() {
  await temporizador(3000);
  return Math.floor(Math.random() * 100) + 1;
}

async function gerarArrayAleatorio(quantidade) {
  const numeros = [];
  for (let i = 0; i < quantidade; i++) {
    const numero = await gerarNumeroAleatorio();
    numeros.push(numero);
  }
  return numeros;
}

(async function () {
  const arrayNumeros = await gerarArrayAleatorio(5);
  console.log("Array de números aleatórios:", arrayNumeros);
})();
