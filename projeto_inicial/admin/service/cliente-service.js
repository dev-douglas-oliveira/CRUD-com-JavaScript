const listaClientes = () => {
    return fetch("http://localhost:3000/profile").then((resposta) => {
        return resposta.json(); // Retorna a resposta em formato JSON
    });
};

export const clienteService = {
    listaClientes,
};
