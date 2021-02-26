import cipher from './cipher.js';

function saveName(){
    var username = document.getElementById('username').value;
    console.log(username);
    cambioPantallas('key');
}

function saveOffset(){
    var offset = document.getElementById('offset');
    //convierte a tipo entero el offset 
    var offsetInt = parseInt(offset.value);
    localStorage.setItem('offsetParsed', offsetInt);
    cambioPantallas('start');
    cipher.encode(offsetInt);
}

function decode(){
    var encrypted_message = document.getElementById("encrypted-message").innerHTML;
    var elemEncrypted = document.querySelector("#encrypted-message");
    var elemDecrypted = document.querySelector("#decrypted-message");
    var offsetInt = localStorage.getItem('offsetParsed');

    var decrypted_message = cipher.decode(offsetInt, encrypted_message);
    elemDecrypted.innerHTML = decrypted_message;
    elemEncrypted.style.display = 'none';
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

let btnDescifrar = document.getElementById("btnDescifrar");
btnDescifrar.addEventListener('click', decode);


console.log(cipher);
