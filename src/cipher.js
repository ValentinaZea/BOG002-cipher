const cipher = {
  // Cifrar
   encode: function(offset){
    
      var string = 'CRUZANDO EL MAR';
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
        console.log(newString);
  },
  // Descifrar
  decode: function(offset, mensaje) {
    var string = mensaje;
    var newString = "";
    
    for (var i = 0; i < string.length; i++) {
      var ascii = string[i];
      // console.log(ascii.charCodeAt(0));

      var asc = ascii.charCodeAt(0);
      var nuevo_ascii = (asc + 65 - offset) % 26 + 65;
    // console.log(nuevo_ascii);
      var new_letter = String.fromCharCode(nuevo_ascii);
      newString += new_letter;
    }
    // sconsole.log(newString);
    return newString;
  }
};

export default cipher;
