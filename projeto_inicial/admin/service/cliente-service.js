const http = new XMLHttpRequest(); // Instancia o objeto XMLHttpRequest

http.open("GET", "http://localhost:3000/profile"); // Abre a conexão com o servidor

http.send(); // Envia a requisição

http.onload = () => {
    // Quando a resposta chegar, executa o código abaixo
    const data = http.response;
    console.log(data);
};
