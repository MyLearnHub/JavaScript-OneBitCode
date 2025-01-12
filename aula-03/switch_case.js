let paisDeOrigem = prompt("Qual é o seu pais de origem?");

switch (paisDeOrigem) {
  case "Argentina":
    alert("Você não é brasileiro");
    alert("Você é argentino");
    break;
  case "Espanha":
    alert("Vocé é europeu");
    break;
  case "Brasil":
    alert("Vocé é brasileiro");
  default:
    alert("Entrada inválida");
}
