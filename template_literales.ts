
let nom:string = "Raul"
let apellido:string = "Abejon"
let edad:number = 35;
//podemos realizarlo de la forma convencional
let texto = "Hola," + nom + " " + apellido + "("+ edad + ")";
console.log(texto);

//podemos hacerlo atraves de los apostrofes y hacer referencia a objetos con ${}
//los saltos de linea los tranformaria al compilar
let texto2 = `hola,
${nom} ${ apellido}
(${edad})`;

console.log(texto2);
