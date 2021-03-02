const cipher = {
  // Cifrar
   encode: function(offset, mensaje){
     var string = mensaje;
      console.log("offset:", offset);
      // var string = 'CRUZANDO EL MAR';
      var newString = "";
    
        for (var i = 0; i < string.length; i++) {
          var ascii = string[i];
          // console.log(ascii.charCodeAt(0));
    
          var asc = ascii.charCodeAt(0);
          var nuevo_ascii = (asc - 65 + offset) % 26 + 65;
        // console.log(nuevo_ascii);
          var new_letter = String.fromCharCode(nuevo_ascii);
          newString += new_letter;
        }
        console.log("texto encriptado:",newString);
      return newString;  
  },
  // Descifrar
  decode: function(offset, mensaje) {
    var string = mensaje;
    var newString = "";
    console.log("mensaje recibido:", mensaje);
    for (var i = 0; i < string.length; i++) {

      if (string[i] == "?")
      {
        new_letter = String.fromCharCode(32);
      }
      else{
        var ascii = string[i];
        var asc = ascii.charCodeAt(0);
        var nuevo_ascii = (asc + 65 - offset) % 26 + 65;
      // console.log(nuevo_ascii);
        var new_letter = String.fromCharCode(nuevo_ascii);
      }
      newString += new_letter;
    }
    // console.log("cadena desencriptada: ", newString);
    return newString;
  }
};

export default cipher;
