let botao = document.querySelector("button");
let paragrafo = document.querySelector("p");

botao.addEventListener("click", function () {
  paragrafo.innerHTML = parseInt(paragrafo.innerHTML) + 1;
});