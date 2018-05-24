"use strict";
//archivo resultante del tsc let_const.ts
var mensaje = "hola";
if (true) {
    var mensaje = "adios";
}
console.log(mensaje);
//Esta seria la traduccion con let observamos como se comporta con las Variables
//dentro del alcance de una condicional
var mensaje2 = "hola2";
if (true) {
    var mensaje2_1 = "adios2";
}
console.log(mensaje2);
