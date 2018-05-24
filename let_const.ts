//Variables let y Const
//salida es adios
var mensaje = "hola" ;

if (true) {
  var mensaje = "adios";
}

console.log(mensaje);


//con let la salida es hola2
let mensaje2 = "hola2" ;

if (true) {
  let mensaje2 = "adios2";
}

console.log(mensaje2);

//constantes han de ser inciializadas en el momento de su declaracion
//en un futuro si queremos cambiar su valor en lineas posteriores a su declaracion
//no sera posible
const OPCIONES = "todas";
if (true) {
  const OPCIONES = "ninguna";
}
console.log(OPCIONES);
