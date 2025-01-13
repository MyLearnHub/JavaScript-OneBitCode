import { diasFaltantes, anosDesde } from "./utils/dateUtils.js";

document.querySelector("#app").innerHTML = `
  <h1>Calculadora de Idade</h1>
  <label for="dataNascimento">Digite sua data de nascimento (AAAA-MM-DD):</label>
  <input type="date" id="dataNascimento" />
  <button id="calcular">Calcular</button>
  <div id="resultado"></div>
`;

document.querySelector("#calcular").addEventListener("click", () => {
  const dataNascimento = document.querySelector("#dataNascimento").value;

  if (!dataNascimento) {
    alert("Por favor, insira uma data válida!");
    return;
  }

  const anos = anosDesde(dataNascimento);
  const dias = diasFaltantes(dataNascimento);

  document.querySelector("#resultado").innerHTML = `
    <p>Você tem ${anos} anos.</p>
    <p>Faltam ${dias} dias para o seu próximo aniversário.</p>
  `;
});
