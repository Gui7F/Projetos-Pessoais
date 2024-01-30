const playPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const avançaCapitulo = document.getElementById('proximo')
const voltaCapitulo = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')

const numeroCapitulos = 10;

let playing = 0 ;
let capituloAtual = 1;

function tocarCapitulo(){
    audioCapitulo.play();
    playPause.classList.remove("bi-play-circle")
    playPause.classList.add('bi-pause-circle')
}
function pauseCapitulo(){
    audioCapitulo.pause();
    playPause.classList.add("bi-play-circle")
    playPause.classList.remove('bi-pause-circle')
}

function tocarOuPausar(){
    if (playing === 0){
       tocarCapitulo()
       playing = 1;
       trocarIcone()
    } else{
        pauseCapitulo();
        playing = 0;
        trocarIcone()
    }
}

function trocaNomeCapitulo(){
    nomeCapitulo.innerText = "Capítulo " + capituloAtual
}

function proximoCapitulo(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    } else{   
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3'
    tocarCapitulo()
    playing = 1; 
    trocaNomeCapitulo()
}

function voltarCapitulo(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else{   
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3'
    tocarCapitulo()
    playing = 1; 
    trocaNomeCapitulo()
}




playPause.addEventListener('click', tocarOuPausar);
avançaCapitulo.addEventListener('click', proximoCapitulo);
voltaCapitulo.addEventListener('click', voltarCapitulo);