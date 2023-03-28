import { clienteService } from "../service/cliente-service.js";

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get("id");

const inputNome = document.querySelector("[data-nome]"); //seleciona o input com o atributo data-nome
const inputEmail = document.querySelector("[data-email]"); //seleciona o input com o atributo data-email

clienteService.detalhaCliente(id).then((dados) => {
    inputNome.value = dados.nome; //atribui o valor do nome do cliente ao input
    inputEmail.value = dados.email; //atribui o valor do email do cliente ao input
});

const form = document.querySelector("[data-form]"); //seleciona o form com o atributo data-form
form.addEventListener("submit", (event) => {
    event.preventDefault();
    clienteService
        .atualizaCliente(id, inputNome.value, inputEmail.value)
        .then(() => {
            window.location.href = "../telas/edicao_concluida.html";
        });
});
