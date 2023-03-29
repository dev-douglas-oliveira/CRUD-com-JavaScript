import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    try {
        const nome = event.target.querySelector("[data-nome]").value; // Seleciona o campo nome
        const email = event.target.querySelector("[data-email]").value; // Seleciona o campo email

        await clienteService.criarCliente(nome, email).then(() => {
            window.location.href = "../telas/cadastro_concluido.html";
        });
    } catch (erro) {
        console.log(erro);
        window.location.href = "../telas/erro.html";
    }
});
