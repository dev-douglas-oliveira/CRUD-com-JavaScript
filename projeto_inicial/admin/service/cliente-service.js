const listaClientes = () => {
    return fetch("http://localhost:3000/profile").then((resposta) => {
        return resposta.json(); // Retorna a resposta em formato JSON
    });
};

const criarCliente = (nome, email) => {
    return fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", //indica qual tipo de conteúdo está sendo enviado
        },
        body: JSON.stringify({
            // convertendo o objeto em uma string JSON
            nome: nome,
            email: email,
        }),
    }).then((resposta) => {
        return resposta.body;
    });
};

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    }).then((resposta) => {
        return resposta.body;
    });
};

//função que detalha um cliente através do id
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
        return resposta.json();
    });
};

//função que atualiza um cliente através do id
const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        }),
    }).then((resposta) => {
        return resposta.body;
    });
};

//função que exporta as funções para serem usadas em outros arquivos
export const clienteService = {
    listaClientes,
    criarCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente,
};
