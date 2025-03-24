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
  var letras = "abcdefghijklmnñopqrstuvwxyz"  ;

  var numeros = 1234567890;

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
      var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
    
   }
   if (longitud >= 4){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
   }
      
   if (longitud >= 5){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
    
   }
   if (longitud >= 6){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
    
   }
   if (longitud >= 7){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
   
   }
   if (longitud >= 8){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
     
   }
   if (longitud >= 9){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
      
   }
   if (longitud >= 10){
    var índiceRandom = Math.floor(Math.random() * caracteresDisponibles.length)
      var caracterRandom = caracteresDisponibles.charAt(índiceRandom)
      contrasena = contrasena + caracterRandom
    
      
   }
   
   return "Contraseña generada: " + contrasena;
  }
  

  


// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
 
