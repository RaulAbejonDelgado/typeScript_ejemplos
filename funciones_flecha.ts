//funcion normal
//con las funciones de flecha en su scope el objeto this hace referencia al objetos
//en el que se encuentra
let miFuncion = function (a:string) {
    return a ;
};

//sinonimo en funcion de Flechazo
//recive el parametro a y el retorno es a
let miFuncion2 = (b:string) => b ;

console.log( miFuncion('Normal'));
console.log( miFuncion2('Flecha'));

let miFuncion3 = function(a:number,b:number){
  return a + b ;
}

let miFuncion4 = (a:number, b:number) => (a*b)

console.log(miFuncion4(4,5));

//creamos un objeto con una funcion interna
let goku = {
  nombre:"Son Goku",
  saludo(){
    console.log('Hola soy ' + this.nombre);
  }
}

goku.saludo();

//En este caso la salida es 'Hola soy undefined' si usamos this.nombre
//esto pasa porque esta apuntando al objeto global
let goku2 = {
  nombre:"Son Goku2",
  saludo(){

    setTimeout(function(){
        console.log('Hola soy ' + this.goku2.nombre);

    }, 1500)

  }
}

goku2.saludo();

//lo mismo pero funcion de flecha
//en este caso vemos que this hace referencia al objeto que pertenece y no al global
let goku3 = {
  nombre:"Son Goku3",
  saludo(){

    setTimeout(() =>console.log('Hola soy ' + this.nombre), 1500);

  }
}

goku3.saludo();
