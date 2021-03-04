const cipher = {
  // Cifrar
   encode: function(offset, mensaje){
     var string = mensaje;
      console.log("offset:", offset);
      var newString = "";

      if(offset == null || offset == "" || typeof string !== "string"|| string == ""){
        console.log("offset no válido");
        throw new TypeError();
      }
      for (var i = 0; i < string.length; i++) {

        if (string[i] == " ")
        {
          new_letter = String.fromCharCode(32);
        }
        else {
          var ascii = string[i];
          var asc = ascii.charCodeAt(0);
          var nuevo_ascii = (asc - 65 + offset) % 26 + 65;
        // console.log(nuevo_ascii);
          var new_letter = String.fromCharCode(nuevo_ascii);
        }
         newString += new_letter;
      }
      //console.log("texto encriptado:",newString);
      return newString; 
          
  },
  // Descifrar
  decode: function(offset, mensaje) {
    var string = mensaje;
    var newString = "";
    console.log("mensaje recibido:", mensaje);

    if(offset == null || offset == "" || typeof string !== "string"|| string == ""){
      console.log("offset no válido");
      // alert("Debes ingresar la clave");
      throw new TypeError();
    }
    
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
