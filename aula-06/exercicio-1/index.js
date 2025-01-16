let paragrafo = document.querySelector("p#meuParagrafo");
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  paragrafo.innerHTML = "Texto alterado com sucesso!";
});