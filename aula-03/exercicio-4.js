const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let venceu = false;

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("O computador gerou um número entre 1 e 100.");
console.log("Você tem 10 tentativas para adivinhar. Boa sorte!");

while (tentativasRestantes > 0) {
  const palpite = parseInt(prompt(`Você tem ${tentativasRestantes} tentativa(s) restante(s). Digite seu palpite:`), 10);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Por favor, insira um número válido entre 1 e 100.");
    continue;
  }

  if (palpite === numeroAleatorio) {
    console.log(`Parabéns! Você acertou o número ${numeroAleatorio} com ${tentativasRestantes} tentativa(s) restante(s)!`);
    venceu = true;
    break;
  } else if (palpite < numeroAleatorio) {
    console.log("O número correto é maior.");
  } else {
    console.log("O número correto é menor.");
  }

  tentativasRestantes--;
}

if (!venceu) {
  console.log(`Que pena! Suas tentativas acabaram. O número correto era ${numeroAleatorio}.`);
}

console.log("Fim de jogo. Obrigado por jogar!");
