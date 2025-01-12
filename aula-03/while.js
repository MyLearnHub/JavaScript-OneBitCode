let numero = 9;

while (numero > 1) {
  alert("O número é " + numero);
  alert("Diminuindo o número...");
  numero = numero - 1;
}

let opcao = prompt("Escolha uma opção: 1. teste\n2. teste 2\n3. sair");

while (opcao !== "3") {
  alert(`Você escolheu a opção ${opcao}`);
  opcao = prompt("Escolha uma opção: 1. teste\n2. teste 2\n3. sair");
}

do {
  alert(`Você escolheu a opção ${opcao}`);
  opcao = prompt("Escolha uma opção: 1. teste\n2. teste 2\n3. sair");
} while (opcao !== "3");

alert("Você escolheu sair...");
