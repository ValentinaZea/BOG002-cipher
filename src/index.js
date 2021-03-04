import cipher from './cipher.js';

function saveName(){
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    console.log(username);
    cambioPantallas('start');
}

function saveOffset(){
    var offset = document.getElementById('offset').value;
   
    if (offset == "") {
        alert("Debes ingresar la clave");
    } else { 
        localStorage.setItem('offset', offset);
        cambioPantallas('next');
    }
}

function decode(){
    var encrypted_message = document.getElementById("encrypted-message").textContent;
    var elemEncrypted = document.querySelector("#encrypted-message");
    var elemDecrypted = document.querySelector("#decrypted-message");
    
    var offsetInt = 5;
    var decrypted_message = cipher.decode(offsetInt, encrypted_message);
    console.log(decrypted_message);
    elemDecrypted.innerHTML = decrypted_message;

    elemEncrypted.style.display = 'none';
    btnNext.style.display = 'inline';
    btnDescifrar.style.display = 'none';
}

function encode(){
    var offset = localStorage.getItem('offset');
    var message = document.getElementById('message-to-encrypt').value;
    var elemSecretMessage = document.querySelector("#secret-message");
    var elemInput = document.querySelector("#message-to-encrypt");
    var elemEndMission = document.querySelector("#btnMission");

    var offsetInt = parseInt(offset); // convierte a tipo entero el offset
    var encoded_message = cipher.encode(offsetInt, message);

    elemSecretMessage.innerHTML = encoded_message;
    elemInput.style.display = 'none';
    elemEndMission.style.display = 'inline';
    btnCifrar.style.display = 'none';
}

function cambioPantallas(section){
    var elem = document.querySelector('#'+section);
    elem.style.display = 'block';
    var elemWelcome = document.getElementById('welcome');
    var elemKey = document.getElementById('key');
    var elemStart = document.getElementById('start');
    var elemNext = document.getElementById('next');
    var elemEnd = document.getElementById('end');
    var elemAdventureName = document.getElementById('adventure-name');
    var username = localStorage.getItem('username');

    if(section ==  "welcome"){
        elemKey.style.display = 'none';
    }
    else if(section == "key"){
        elemStart.style.display = 'none';
    }
    else if(section == "start"){
        elemKey.style.display = 'display';
        elemWelcome.style.display = 'none';
    }
    else if(section == "next"){
        elemKey.style.display = 'none';
    }
    else if(section == "end"){
        elemNext.style.display = 'none';
        elemAdventureName.innerHTML += " " +username;
    }
    
}

function exit(){
    close();
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
btnNext.addEventListener('click', () => cambioPantallas('key'));

let btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener('click', encode);

let btnMission = document.querySelector("#btnMission");
btnMission.addEventListener('click', () => cambioPantallas('end'));

let btnPlayAgain = document.querySelector("#btnPlayAgain");
btnPlayAgain.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});

let btnSalir = document.querySelector("#btnSalir");
btnSalir.addEventListener('click', exit);


console.log(cipher);
