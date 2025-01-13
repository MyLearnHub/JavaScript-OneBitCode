export function diasFaltantes(data) {
  const hoje = new Date();
  const dataFutura = new Date(data);

  if (dataFutura.setFullYear(hoje.getFullYear()) < hoje) {
    dataFutura.setFullYear(hoje.getFullYear() + 1);
  }

  const diff = dataFutura - hoje;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function anosDesde(data) {
  const hoje = new Date();
  const dataPassada = new Date(data);

  let anos = hoje.getFullYear() - dataPassada.getFullYear();

  const aniversarioEsteAno = new Date(
    hoje.getFullYear(),
    dataPassada.getMonth(),
    dataPassada.getDate()
  );

  if (hoje < aniversarioEsteAno) {
    anos--;
  }

  return anos;
}
