const criaNovaLinha = (nome, email) => {
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
    return linhaNovoCliente; // Retorna a nova linha
};

const tabela = document.querySelector("[data-tabela]"); // Percorre a árvore do DOM e seleciona a tabela

const listaClientes = () => {
    return fetch("http://localhost:3000/profile").then((resposta) => {
        return resposta.json(); // Retorna a resposta em formato JSON
    });
};

listaClientes().then((data) => {
    data.forEach((elemento) => {
        //
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)); // Adiciona a nova linha na tabela
    });
});
