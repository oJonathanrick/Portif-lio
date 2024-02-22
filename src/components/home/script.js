

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


const dark_color = ['#171717', '#eeeedd', '#111111', '#333333', '#444444', '#aaaaaa' ]
const light_color = ['#eeeedd', '#171717', '#c9c0c0', '#cccccc', '#bbbbbb', '#555555']

document.querySelector('#toggle-btn').addEventListener('click', function () {
    if (this.checked) {
        document.body.style.setProperty('--primary', light_color[0])
        document.body.style.setProperty('--secundary', light_color[1])
        document.body.style.setProperty('--tertiary', light_color[2])
        document.body.style.setProperty('--quaternary', light_color[3])
        document.body.style.setProperty('--quinary', light_color[4])
        document.body.style.setProperty('--senary', light_color[5])

    }
    else {
        document.body.style.setProperty('--primary', dark_color[0])
        document.body.style.setProperty('--secundary', dark_color[1])
        document.body.style.setProperty('--tertiary', dark_color[2])
        document.body.style.setProperty('--quaternary', dark_color[3])
        document.body.style.setProperty('--quinary', dark_color[4])
        document.body.style.setProperty('--senary', dark_color[5])
    }
})
