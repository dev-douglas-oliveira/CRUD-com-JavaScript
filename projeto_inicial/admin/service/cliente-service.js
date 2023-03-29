const listaClientes = () => {
    return fetch("http://localhost:3000/profile").then((resposta) => {
        if (resposta.ok) {
            return resposta.json(); // Retorna a resposta em formato JSON
        }
        throw new Error("Não foi possível listar os clientes");
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
        if (resposta.ok) {
            return resposta.body;
        }
        throw new Error("Não foi possível criar o cliente");
    });
};

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    }).then((resposta) => {
        if (!resposta.ok) {
            throw new Error("Não foi possível remover o cliente");
        }
        return resposta.body;
    });
};

//função que detalha um cliente através do id
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
        if (!resposta.ok) {
            return resposta.json();
        }
        throw new Error("Não foi possível detalhar o cliente");
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
        if (resposta.ok) {
            return resposta.body;
        }
        throw new Error("Não foi possível atualizar o cliente");
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
