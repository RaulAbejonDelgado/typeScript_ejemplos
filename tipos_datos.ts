//
//hacemos el tipado estatico
//detectando la definicion de nombre en cualquier de los archivos del proyecto

//textp
let nombre:string = "Peter";

//numero
let numero:number = 123;

//booleano

let booleano:boolean = true;

//date
let hoy:Date = new Date();

//any sirve para poder hacer uso el tipado dinamico
let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

//tipo objeto creando un objeto
//con let hace estatico las propiedades del objeto dandonos error si queremos
//crear posteriormente nuevas propiedades al objeto

let persona = {
  nombre:"Raul",
  edad:35
};
