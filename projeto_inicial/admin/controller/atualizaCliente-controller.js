import { clienteService } from "../service/cliente-service.js";

//dessa forma a função é executada assim que o arquivo é carregado
(async () => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get("id");

    const inputNome = document.querySelector("[data-nome]"); //seleciona o input com o atributo data-nome
    const inputEmail = document.querySelector("[data-email]"); //seleciona o input com o atributo data-email
    try {
        const dados = await clienteService.detalhaCliente(id);
        inputNome.value = dados.nome; //atribui o valor do nome do cliente ao input
        inputEmail.value = dados.email; //atribui o valor do email do cliente ao input
    } catch (erro) {
        console.log(erro);
        window.location.href = "../telas/erro.html";
    }

    const form = document.querySelector("[data-form]"); //seleciona o form com o atributo data-form
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            await clienteService.atualizaCliente(
                id,
                inputNome.value,
                inputEmail.value
            );
            window.location.href = "../telas/edicao_concluida.html";
        } catch (erro) {
            console.log(erro);
            window.location.href = "../telas/erro.html";
        }
    });
})();
