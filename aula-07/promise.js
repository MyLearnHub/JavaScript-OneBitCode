console.log("Script iniciado");

const minhaPromise = new Promise(function (resolve, reject) {
  if (true) {
    reject("Promise rejeitada");
  } else {
    setTimeout(function () {
      console.log("Executando a promise...");
      resolve("Promise resolvida");
    }, 3 * 1000);
  }
});

minhaPromise.then(function (resultado) {
  console.log(resultado);
});

minhaPromise.catch(function (motivo) {
  console.log(motivo);
});

console.log("Script finalizado");
