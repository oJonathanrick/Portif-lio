

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Mostra ou oculta o botão conforme a posição de rolagem
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Rola para o topo quando o botão é clicado
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // Para navegadores da Webkit
        document.documentElement.scrollTop = 0; // Para outros navegadores
    });
});


function showHobbyInfo(hobby) {
    // Esconde todas as informações de hobbies
    document.querySelectorAll('.hobby-info').forEach(info => {
        info.classList.remove('show-info');
    });

    // Mostra a informação específica do hobby clicado
    document.getElementById(`${hobby}-info`).classList.add('show-info');
}