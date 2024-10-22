document.getElementById("gerar").addEventListener("click", function() {
    // Capturando os valores das entradas
    const cor = document.getElementById("cor").value;
    const tamanhoFonte = document.getElementById("tamanho").value;
    const nomeBrinquedo = document.getElementById("nome").value;

    // Construindo a tag <h1> com o estilo CSS
    const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

    // Exibindo o resultado
    document.getElementById("resultado").innerHTML = resultado;
});
