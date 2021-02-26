import cipher from './cipher.js';

function saveName(){
    var username = document.getElementById('username').value;
    console.log(username);
    cambioPantallas('key');
}

function saveOffset(){
    var offset = document.getElementById('offset').value;
    console.log(offset);
    cambioPantallas('start');
    cipher.decode(offset);
}

function cambioPantallas(section){
    var elem = document.querySelector('#'+section);
    elem.style.display = 'block';
    var elemWelcome = document.getElementById('welcome');
    var elemKey = document.getElementById('key');
    console.log("Entró a cambio pantallas");

    if(section ==  "welcome"){
        elemWelcome.style.display = 'display';
        elemKey.style.display = 'none';
    }
    else if(section == "key"){
        elemKey.style.display = 'display';
        elemWelcome.style.display = 'none';
    }
    else if(section == "start"){
        elemKey.style.display = 'none';
        // elemWelcome.style.display = 'none';
    }
    else if(section == "decrypt"){
        elemKey.style.display = 'display';
        elemWelcome.style.display = 'none';
    }
}

let divMain = document.querySelector(".main");
divMain.addEventListener('load', () => cambioPantallas('welcome'));

let btnBienvenida = document.getElementById("btnBienvenida");
btnBienvenida.addEventListener('click', saveName);

let btnClave = document.getElementById("btnClave");
btnClave.addEventListener('click', saveOffset);






console.log(cipher);
