document.getElementById("gerarLista").addEventListener("click", function() {
    // Capturando os nomes dos brinquedos
    let brinquedo1 = document.getElementById("brinquedo1").value;
    let brinquedo2 = document.getElementById("brinquedo2").value;
    let brinquedo3 = document.getElementById("brinquedo3").value;

    // Gerando a lista
    let listaHTML = "<ul>";
    listaHTML += `<li>${brinquedo1}</li>`;
    listaHTML += `<li>${brinquedo2}</li>`;
    listaHTML += `<li>${brinquedo3}</li>`;
    listaHTML += "</ul>";

    // Exibindo a lista na vitrine
    document.getElementById("vitrine").innerHTML = listaHTML;
});
