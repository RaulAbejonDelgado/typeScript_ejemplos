
// Uso de Let y Const
// var nomb = "Ricardo Tapia";
// var edad2 = 23;
let nomb:string = "Ricardo Tapia";
let edad2:number = 23;

// var PERSONAJE = {
//   nombre: nombre,
//   edad: edad
// };
const PERSONAJE = {
  nombre: nomb,
  edad: edad2
};



interface batman{
  nombre:string;
  artesmarciales:string[];
}

// Cree una interfaz que sirva para validar el siguiente objeto
let batman:batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }

let resultadoDoble  = (a:number, b:number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
// function getAvenger( nombre, poder, arma ){
//   var mensaje;
//   if( poder ){
//      mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//   }else{
//      mensaje = nombre + " tiene un " + poder
//   }
// };

function getAvenger(NOMBRE:string, PODER?:string, ARMA:string = "arco"){
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + ARMA;
     mensaje2 = `${ nombre} tiene el poder de. ${poder} y un arma : ${ARMA}`
  }else{
     mensaje = `${ nombre} + " tiene un " + ${poder}`
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
base:number = 5;
altura:number = 4;

//calcula():number => this.base * this.altura;
 function calcular (base:number,altura:number){
   return base*altura;
 }
console.log(this.calcular(5,4));
}

class Rect {
  base2:number ;
  altura2:number ;
  //En este caso devuelve un number
  calcularArea():number {
    return this.base2*this.altura2;

  }
}
