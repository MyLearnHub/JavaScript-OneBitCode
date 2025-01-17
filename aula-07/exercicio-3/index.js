function temporizador(tempo) {
  return new Promise((resolve) => setTimeout(resolve, tempo));
}

async function executarAlertas() {
  await temporizador(3000);
  alert("Alerta após 3 segundos!");

  await temporizador(5000);
  alert("Alerta após 5 segundos!");

  await temporizador(7000);
  alert("Alerta após 7 segundos!");
}

executarAlertas();
