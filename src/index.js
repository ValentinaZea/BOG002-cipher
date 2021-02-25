import cipher from './cipher.js';

function saveName(){
    var username = document.getElementById('username').value;
    console.log(username);
}

function cambioPantallas(section){
    var elemWelcome = document.getElementById('welcome');
    var elemKey = document.getElementById('key');
    console.log("Entró a cambio pantallas");

    if(section == 'welcome'){
        elemWelcome.style.display = 'display';
        elemKey.style.display = 'none';
    }
    else if( section == 'key'){
        elemWelcome.style.display = 'none';
        elemKey.style.display = 'display';
    }
}

let btnBienvenida = document.getElementById("btnBienvenida");
btnBienvenida.addEventListener('click', saveName);

// let btnClave = document.getElementById("btnClave");
// btnClave.addEventListener('click', cambioPantallas);






console.log(cipher);
