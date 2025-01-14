const estoque = [];

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1. Cadastrar novo item\n" +
            "2. Listar itens cadastrados\n" +
            "3. Alterar quantidade de um item\n" +
            "4. Excluir um item do estoque\n" +
            "5. Sair"
        );

        switch (opcao) {
            case "1":
                cadastrarItem();
                break;
            case "2":
                listarItens();
                break;
            case "3":
                alterarQuantidade();
                break;
            case "4":
                excluirItem();
                break;
            case "5":
                alert("Saindo do programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "5");
}

function cadastrarItem() {
    const nome = prompt("Digite o nome do item:");
    const quantidade = parseInt(prompt("Digite a quantidade do item:"), 10);

    if (!isNaN(quantidade)) {
        estoque.push({ nome, quantidade });
        alert(`Item "${nome}" cadastrado com sucesso.`);
    } else {
        alert("Quantidade inválida.");
    }
}

function listarItens() {
    if (estoque.length === 0) {
        alert("O estoque está vazio.");
    } else {
        let lista = "Itens no estoque:\n";
        estoque.forEach((item, index) => {
            lista += `${index + 1}. ${item.nome} - Quantidade: ${item.quantidade}\n`;
        });
        alert(lista);
    }
}

function alterarQuantidade() {
    listarItens();
    const index = parseInt(prompt("Digite o número do item que deseja alterar:"), 10) - 1;

    if (estoque[index]) {
        const novaQuantidade = parseInt(prompt("Digite a nova quantidade:"), 10);
        if (!isNaN(novaQuantidade)) {
            estoque[index].quantidade = novaQuantidade;
            alert(`Quantidade do item "${estoque[index].nome}" alterada para ${novaQuantidade}.`);
        } else {
            alert("Quantidade inválida.");
        }
    } else {
        alert("Item não encontrado.");
    }
}

function excluirItem() {
    listarItens();
    const index = parseInt(prompt("Digite o número do item que deseja excluir:"), 10) - 1;

    if (estoque[index]) {
        const removido = estoque.splice(index, 1);
        alert(`Item "${removido[0].nome}" removido do estoque.`);
    } else {
        alert("Item não encontrado.");
    }
}

menu();
