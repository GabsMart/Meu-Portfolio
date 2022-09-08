// Fazer a barra de navegação diminuir
let navbar = document.getElementById('navbar');

window.onscroll = function scrollFunction () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.padding = "10px 60px";
        navbar.style.transition = ".2s";

    } else {
        navbar.style.padding = "20px 60px";
    }
};

// Fazer o vídeo da pulseira aparecer na aba #Sobre
let botãoPulseira = document.getElementById('aparecer-video');
let videoYT = document.getElementById('video-yt')
let fecharVideo = document.getElementById('fechar-video')


botãoPulseira.addEventListener("click", function () {
    videoYT.style.display = 'block';
})

fecharVideo.addEventListener("click", function () {
    videoYT.style.display = 'none';
})

// Fazer Habilidades ou Formação Acadêmica aparecer na aba #Habilidades
let aparecerHabilidades = document.getElementById('aparecer-Habilidades');
let aparecerFormação = document.getElementById('aparecer-Formação')

let conteudoHabilidades = document.getElementById('Habilidades');
let conteudoFormação = document.getElementById('Formação');

aparecerHabilidades.addEventListener("click", function () {
    conteudoHabilidades.style.display = 'grid';
    conteudoFormação.style.display = 'none';
})

aparecerFormação.addEventListener("click", function () {
    conteudoFormação.style.display = 'grid';
    conteudoHabilidades.style.display = 'none';
})