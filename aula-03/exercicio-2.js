let number = parseInt(prompt("Digite um número para ver sua fatorial: "));
console.log("existo");

let fatorial = 1;

for (let i = 1; i <= number; i++) {
  fatorial *= i;
}

alert(`O fatorial de ${number} é ${fatorial}`);

console.log(`O fatorial de ${number} é ${fatorial}`);