/* ALTERAÇÃO DO LINK NA PAGINA CLIENTES*/

const mudarLink = document.getElementById("tipo-protocolo--alt");

mudarLink.addEventListener('change', function () {

    if (mudarLink.value == "Tipo1") {
        const linkSome = document.querySelector("#linkNovo");
        linkSome.href = "some-clients.html";

    } else {
        const linkEspecific = document.querySelector("#linkNovo");
        linkEspecific.href = "especific-clients.html";
    }

})

