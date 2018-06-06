"use strict";
var nom = "Raul";
var apellido = "Abejon";
var edad = 35;
//podemos realizarlo de la forma convencional
var texto = "Hola," + nom + " " + apellido + "(" + edad + ")";
console.log(texto);
//podemos hacerlo atraves de los apostrofes y hacer referencia a objetos con ${}
//los saltos de linea los tranformaria al compilar
var texto2 = "hola,\n" + nom + " " + apellido + "\n(" + edad + ")";
console.log(texto2);
