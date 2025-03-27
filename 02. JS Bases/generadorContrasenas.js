function checkLongitud(longitud) {
  /* TU CODIGO */

   if (!longitud) return "debe ingresar la longitud"
   if (typeof longitud !== "string") return "La longitud recibida no es válida"
   if (longitud < 3) return  "La longitud debe ser mayor o igual a 3"
   if (longitud > 10) return "La longitud debe ser menor o igual a 10"
   return longitud

}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */
  var letras =  "abcdefghijklmnñopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!#$%&/()=?¿*¨¨[]{}+-@\¡|°";

  var letrasMayusculas = letras.toUpperCase()

  var caracteresDisponibles = letras;
  
  if (incluirEspeciales) {
      
    caracteresDisponibles += especiales
  }
  if (incluirNumeros) {
    caracteresDisponibles += numeros
  }

  if (incluirMayusculas) {
    caracteresDisponibles += letrasMayusculas
  }


  var contrasena = "";

  if (longitud >= 3) {
    for (var i = 0; i < longitud; i++) {
      var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length);
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom);
      contrasena += caracterRandom;

    }
  }
  

  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
