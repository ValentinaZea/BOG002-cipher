const cipher = {
  // Descifrar
      decode: function(offset){
   
        var string = 'CRUZANDO';
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
  // Cifrar
  encode: function() {
    var string = 'HOLA ZURI';
    var newString = "";

    for (var i = 0; i < string.length; i++) {
      var ascii = string[i];
      // console.log(ascii.charCodeAt(0));

      var asc = ascii.charCodeAt(0);
      var nuevo_ascii = (asc - 65 - 5) % 26 + 65;
    // console.log(nuevo_ascii);
      var new_letter = String.fromCharCode(nuevo_ascii);
      newString += new_letter;
    }
    console.log(newString);
  }
};

export default cipher;
