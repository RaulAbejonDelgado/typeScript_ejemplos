"use strict";
//en objetos
var powerRanger = {
    alias: 'Chun',
    color: 'rojo',
    poder: 'Super patada'
};
//asi lo podriamos hacer de la forma clasica
// let alias = powerRanger.alias;
// let color = powerRanger.color;
// let poder = powerRanger.poder;
// console.log(alias + " es el power ranger de color "+ color + " su golpe especial es  "+ poder);
//la siguiente linea seria la sintaxis de la de destructuracion de objetos y o arrays
//sin importar el orden de las propiedades lo importante es que coincidan los nombres
//se puede añadir un alias a la propiedad alias:apodo a la hora de llamarlo usaremos el alias
var alias = powerRanger.alias, color = powerRanger.color, poder = powerRanger.poder;
console.log(alias + " es el power ranger de color " + color + " su golpe especial es  " + poder);
//en arrays
var totugasNinja = ['Leonardo', 'Michelangelo', 'raphael', 'Donatello'];
var azul = totugasNinja[0], naranja = totugasNinja[1], rojo = totugasNinja[2], morado = totugasNinja[3];
console.log('Las tortugas ninjas son : ' + azul + " " + naranja + " " + rojo + " " + morado);
