//problema
//definiendo interfaz podemos evitar el tener que indicar en la funcion el tipo de parametros que entran
interface Xmen {
    nombre:string,
    poder:string
}

//Sin interfaz deberiamos indicar los parametros y de que tipo son
function enviarMision(xmen: any){
  console.log("enviando a:"+ xmen.nombre);
}
//si enviamos un objeto deberiamos controlar de que tipo son las propiedades que entran
function enviarMision2(xmen: {nombre:string,poder:string}){
  console.log("enviando a:"+ xmen.nombre+ " y usara "+ xmen.poder);
}
//le decimos que xmen es del tipo la interfaz xmen y nos ahorramos la declaracion de parametros
function enviarCuartel(xmen: Xmen){
  console.log("enviando al cuartel:"+ xmen.nombre);
}

let superman = {
  nombre:"Clark ken",
  poder:"Rayos x"
}

enviarMision(superman);
enviarMision2(superman);
enviarCuartel(superman);
