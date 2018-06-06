function activar(quien:string) {
  let mensaje:string ;

  mensaje = `${ quien} ....
  activo la señal`;
  console.log(mensaje);
}
//Si quisieramos hacer uso de activar pasandole un tipo de dato que no sea string
//nos daria un error
activar("Raul");

//podemos inicializar argumentos en la propia entrada de parametros de la funcion
function activar2(quien:string, objeto:string = "batiseñal") {
  let mensaje:string ;

  mensaje = `${ quien} ....
  activo la ${objeto}`;
  console.log(mensaje);
}
//Si quisieramos hacer uso de activar pasandole un tipo de dato que no sea string
//nos daria un error
activar2("Raul");

//podemos indicarle paramentros que pueden entrar pero no tiene porque ser siempre
//y no por ellos darnos error cuando la invocamos
// nombre?=tipo
function activar3(quien:string, objeto:string = "batiseñal", momento?:string) {
  let mensaje:string ;
  if(momento){
    mensaje = `${ quien} ....
    activo la ${objeto} en la ${momento}`;
  }else{
    mensaje = `${ quien} ....
    activo la ${objeto} `;
    }
  console.log(mensaje);
}

//Si queremos mandarle el parametro opcional, nos vemos obligados a mandarle tmb
//el parametro batiseñal, ya que si solo mandamos 2 paramentros pensara que el
//segundo parametro hara referencia a objeto y no a momento
//los parametros opcionales siempre de colocarse al final de los parametros y
//nunca al principio
activar3("Raul","batiseñal","noche");
