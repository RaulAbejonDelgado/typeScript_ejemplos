"use strict";
// Uso de Let y Const
// var nomb = "Ricardo Tapia";
// var edad2 = 23;
var nomb = "Ricardo Tapia";
var edad2 = 23;
// var PERSONAJE = {
//   nombre: nombre,
//   edad: edad
// };
var PERSONAJE = {
    nombre: nomb,
    edad: edad2
};
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
var resultadoDoble = function (a, b) { return (a + b) * 2; };
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
function getAvenger(NOMBRE, PODER, ARMA) {
    if (ARMA === void 0) { ARMA = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + ARMA;
        mensaje2 = nombre + " tiene el poder de. " + poder + " y un arma : " + ARMA;
    }
    else {
        mensaje = nombre + " + \" tiene un \" + " + poder;
    }
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
        this.base = 5;
        this.altura = 4;
        //calcula():number => this.base * this.altura;
    }
    return Rectangulo;
}());
//calcula():number => this.base * this.altura;
function calcular(base, altura) {
    return base * altura;
}
console.log(this.calcular(5, 4));
var Rect = /** @class */ (function () {
    function Rect() {
    }
    //En este caso devuelve un number
    Rect.prototype.calcularArea = function () {
        return this.base2 * this.altura2;
    };
    return Rect;
}());
