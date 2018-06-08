//decoradores son funciones

function consola ( constructor:Function){
  console.log(constructor + " aqui");
}

//le estamos diciendo que hereda la funcion consola
@consola
class villano {
  constructor( public nombre:string){

  }
}
