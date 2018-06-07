//del es6
//hacer una funcion cuando una tarea sincrona termina una tarea
//los argumentos de la promera son la funcion si funciono correctamente, la segunda la funcion si sale mal
let prom1 = new Promise( function(resolve,reject){
  setTimeout(()=>{
    console.log('Promesa terminada');

    //termina bien
    resolve();

    //termina mal
    reject();
  },1500)
})

//cuando se ejecute la promera recive 2 parametros la primera hace referencia a
//resolve y la segunda a reject
//prom1.then(parametro_funcion_resolve,parametro_funcion_reject)
prom1.then(function(){
  console.log("Ejecucion correcta");},
    function(){
      console.error('Ejecutar por salir mal');
    })
