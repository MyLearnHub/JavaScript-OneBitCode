function obterUsuarioPorId(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        nome: `Usuário ${id}`,
        email: `usuario${id}@email.com`,
      });
    }, 1000);
  });
}

async function mapearIdsParaUsuarios(ids) {
  const usuarios = [];
  for (const id of ids) {
    const usuario = await obterUsuarioPorId(id);
    usuarios.push(usuario);
  }
  return usuarios;
}

(async function () {
  const ids = [1, 2, 3, 4, 5]; // Array de IDs
  const usuarios = await mapearIdsParaUsuarios(ids);
  console.log("Array de objetos de usuário:", usuarios);
})();
