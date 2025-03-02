const audio = new Audio('audio/pew.mp3');
const pew = document.getElementById('pew');

function tocar(){
    audio.play()
}

pew.addEventListener('click', tocar)