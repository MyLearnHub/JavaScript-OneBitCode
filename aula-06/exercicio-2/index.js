let input = document.querySelector("input");
let ul = document.querySelector("ul");
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});