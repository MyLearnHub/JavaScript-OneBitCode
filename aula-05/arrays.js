let listaDeFrutas = ["Maçã", "Laranja", "Uva"];

console.log(listaDeFrutas[0]);

console.log(listaDeFrutas);
listaDeFrutas[1] = "Banana";
console.log(listaDeFrutas);

listaDeFrutas.push("Abacaxi");
console.log(listaDeFrutas);

listaDeFrutas.pop();
console.log(listaDeFrutas);

listaDeFrutas.shift();
console.log(listaDeFrutas);

listaDeFrutas.unshift("Laranja");
console.log(listaDeFrutas);

let numeros = [4, 9, 10, 3, false, true, "5"];

console.log(listaDeFrutas);
console.log(numeros);

let novoArray = listaDeFrutas.concat(numeros);
console.log(novoArray);

let listaEmTexto = novoArray.join(" e também ");
console.log(novoArray);
console.log(listaEmTexto);

let resultado = listaEmTexto.split(" e também ");
console.log(resultado);

let frutas = ["Maçã", "Laranja", "Uva", "Banana", "Abacaxi"];

const duasPrimeiras = frutas.slice(2, 4);

console.log(frutas);
console.log(duasPrimeiras);

frutas.splice(2, 2, "Limão")
console.log(frutas);

