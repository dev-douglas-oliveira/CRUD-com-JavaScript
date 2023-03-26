import { clienteService } from "../service/cliente-service.js";

const formulario = document
    .querySelector("[data-form]")
    .addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const nome = event.target.querySelector("[data-nome]").value; // Seleciona o campo nome
        const email = event.target.querySelector("[data-email]").value; // Seleciona o campo email

        clienteService.criarCliente(nome, email).then(() => {
            window.location.href = "../telas/cadastro_concluido.html";
        });
    });
