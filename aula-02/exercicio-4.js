const valorCompra = parseFloat(prompt("Digite o valor da compra:"));
const porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));

const valorDesconto = (valorCompra * porcentagemDesconto) / 100;
const total = valorCompra - valorDesconto;

alert(`Valor do desconto: R$${valorDesconto.toFixed(2)}`);
alert(`Total com desconto: R$${total.toFixed(2)}`);
