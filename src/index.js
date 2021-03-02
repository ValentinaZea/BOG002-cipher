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
    // cipher.encode(offsetInt);
}

function decode(){
    var encrypted_message = document.getElementById("encrypted-message").textContent;
    var elemEncrypted = document.querySelector("#encrypted-message");
    var elemDecrypted = document.querySelector("#decrypted-message");
    var elemBtnDecrypt = document.querySelector("#btnDescifrar");
    var elemBtnNext = document.querySelector("#btnNext");

    var offsetInt = localStorage.getItem('offsetParsed');

    var decrypted_message = cipher.decode(offsetInt, encrypted_message);
    console.log(decrypted_message);
    elemDecrypted.innerHTML = decrypted_message;
    elemEncrypted.style.display = 'none';
    elemBtnNext.style.display = 'inline';
    elemBtnDecrypt.style.display = 'none';
}

function encode(){
    var offsetInt = localStorage.getItem('offsetParsed');
    var message = document.getElementById('message-to-encrypt').value;
     console.log(message);
    cipher.decode(offsetInt, message);
}

function cambioPantallas(section){
    var elem = document.querySelector('#'+section);
    elem.style.display = 'block';
    var elemWelcome = document.getElementById('welcome');
    var elemKey = document.getElementById('key');
    var elemStart = document.getElementById('start');
   
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
    }
    else if(section == "next"){
        elemStart.style.display = 'none';
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

let btnNext = document.getElementById("btnNext");
btnNext.addEventListener('click', () => cambioPantallas('next'));

let btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener('click', encode);



console.log(cipher);
