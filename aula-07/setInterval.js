console.log("Script iniciado");
let contador = 0;

const intervalId = setTimeout(function () {
  console.log(`Executado ${contador} vezes após 2 segundos`);
  contador++;
  if (contador >= 6) {
    clearInterval(intervalId);
  }
}, 2 * 1000);

console.log("Script finalizado");
