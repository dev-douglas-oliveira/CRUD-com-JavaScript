import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement("tr"); // Cria uma nova linha na tabela para cada novo cliente
    const conteudoLinha = `   <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
    </td>   `; // Cria o conteúdo da nova linha

    linhaNovoCliente.innerHTML = conteudoLinha; // Adiciona o conteúdo da nova linha
    linhaNovoCliente.dataset.id = id; // Adiciona o id do cliente na linha
    return linhaNovoCliente; // Retorna a nova linha
};

const tabela = document.querySelector("[data-tabela]"); // Percorre a árvore do DOM e seleciona a tabela

tabela.addEventListener("click", (event) => {
    let ehBotaoDeletar =
        event.target.className == "botao-simples botao-simples--excluir"; // Verifica se o elemento clicado é um botão de deletar
    if (ehBotaoDeletar) {
        const linhaCliente = event.target.closest("[data-id]"); // procuro o elemento mais próximo que tenha o atributo data-id
        let id = linhaCliente.dataset.id; // Seleciona o id do cliente
        clienteService.removeCliente(id).then(() => {
            linhaCliente.remove(); // Remove a linha do cliente
        });
    }
});

clienteService.listaClientes().then((data) => {
    data.forEach((elemento) => {
        //
        tabela.appendChild(
            criaNovaLinha(elemento.nome, elemento.email, elemento.id)
        ); // Adiciona a nova linha na tabela
    });
});
