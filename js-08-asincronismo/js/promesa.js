//PROMESAS
//las promesas tienen 3 estados, creamos la promesa: 1 pendiente(Pending). 2 promesa cumplida(fullfilled) o 3 promesa rechazada(Rejected)
//la fuincion promesa recibe 2 parametros (El resolve, o el reject), estas 2 opciones me indican si se pudo hacer lo que se pidio y me devuelve un resolve,
//si no se pudo hacer lo que pedimos me devuelve un reject

// function esperar() {
//     return new Promise((resolve, reject) =>{
        
//         setTimeout(() => {
//             resolve("Hola mundo");
//         }, 2000)
//         // reject("ERROR");

//     })
// }

// console.log("1");
// console.log(esperar());
// console.log("2");


// //THEN() de promesas, es cuando se cumple la promesa, se resuelva o no, para esto usamos el parametro response en el then

// esperar().then((response) => console.log(response));


//CATCH()


//manejo de errores con reject

function esperar(condicion) {
    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            if(condicion){
                resolve("Hola mundo");
            }else{
                reject("Hubo un error")
            }
            
        }, 2000)
    })
}

esperar(false)
    .then((response) => console.log(response))  //resolve
    .catch((error) => console.log(error)) //reject
    .finally(() => console.log("Siempre me ejecuto"));


//ASYNC / AWAIT . Son las ultimas tecnologias y esta sintaxis nos permite trabajar con nuestras promesas evitando seguir una metodologia tan estrcuturada
//Para eso utilizaremos las palabras reservadas async y await.