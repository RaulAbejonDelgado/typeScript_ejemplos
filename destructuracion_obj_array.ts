
//en objetos
let powerRanger = {
  alias:'Chun',
  color:'rojo',
  poder:'Super patada'

}
//asi lo podriamos hacer de la forma clasica
// let alias = powerRanger.alias;
// let color = powerRanger.color;
// let poder = powerRanger.poder;
// console.log(alias + " es el power ranger de color "+ color + " su golpe especial es  "+ poder);

//la siguiente linea seria la sintaxis de la de destructuracion de objetos y o arrays
//sin importar el orden de las propiedades lo importante es que coincidan los nombres
//se puede añadir un alias a la propiedad alias:apodo a la hora de llamarlo usaremos el alias
let {alias, color, poder } = powerRanger;

console.log(alias + " es el power ranger de color "+ color + " su golpe especial es  "+ poder);

//en arrays

let totugasNinja:string[] = ['Leonardo', 'Michelangelo', 'raphael', 'Donatello'];

let [ azul,  naranja, rojo, morado] = totugasNinja;

console.log('Las tortugas ninjas son : '+ azul +" "+ naranja +" "+ rojo +" "+ morado );
