function ola(arg) {
  console.log("Olá, mundo!");
  console.log(arg);
}

ola("Isaac");

function subtrair(x, y, nome = "Sem Nome") {
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`O nome é ${nome}`);
}

subtrair(10, 7);

const subtrair2 = function (x, y) {
  let resultado = x - y;
  console.log(`${x} - ${y} = ${resultado}`);
  return resultado;
};

const resultado = subtrair2(10, 7);

console.log(`O resultado foi: ${resultado}`);

console.log(subtrair2);

