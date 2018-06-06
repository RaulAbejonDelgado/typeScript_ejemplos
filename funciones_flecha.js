"use strict";
//funcion normal
//con las funciones de flecha en su scope el objeto this hace referencia al objetos
//en el que se encuentra
var miFuncion = function (a) {
    return a;
};
//sinonimo en funcion de Flechazo
//recive el parametro a y el retorno es a
var miFuncion2 = function (b) { return b; };
console.log(miFuncion('Normal'));
console.log(miFuncion2('Flecha'));
var miFuncion3 = function (a, b) {
    return a + b;
};
var miFuncion4 = function (a, b) { return (a * b); };
console.log(miFuncion4(4, 5));
//creamos un objeto con una funcion interna
var goku = {
    nombre: "Son Goku",
    saludo: function () {
        console.log('Hola soy ' + this.nombre);
    }
};
goku.saludo();
//En este caso la salida es 'Hola soy undefined' si usamos this.nombre
//esto pasa porque esta apuntando al objeto global
var goku2 = {
    nombre: "Son Goku2",
    saludo: function () {
        setTimeout(function () {
            console.log('Hola soy ' + this.goku2.nombre);
        }, 1500);
    }
};
goku2.saludo();
//lo mismo pero funcion de flecha
//en este caso vemos que this hace referencia al objeto que pertenece y no al global
var goku3 = {
    nombre: "Son Goku3",
    saludo: function () {
        var _this = this;
        setTimeout(function () { return console.log('Hola soy ' + _this.nombre); }, 1500);
    }
};
goku3.saludo();
