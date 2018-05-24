"use strict";
//
//hacemos el tipado estatico
//detectando la definicion de nombre en cualquier de los archivos del proyecto
//textp
var nombre = "Peter";
//numero
var numero = 123;
//booleano
var booleano = true;
//date
var hoy = new Date();
//any sirve para poder hacer uso el tipado dinamico
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
//tipo objeto creando un objeto
//con let hace estatico las propiedades del objeto dandonos error si queremos
//crear posteriormente nuevas propiedades al objeto
var persona = {
    nombre: "Raul",
    edad: 35
};
