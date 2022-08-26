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