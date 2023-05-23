//FUNCION FLECHA ESPERAR
const esperar = condicion =>{
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

//FUNCION NORMAL COMUN ESPERAR
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

//FUNCION FLECHA DE MANEJO ERROR
const manejoError = async codicion =>{
    try{
        const resultado = await esperar(condicion);
        console.log(resultado);
        
    }catch(error){      //aca capturo el error y lo controlo yo

        console.log(error);
    }
}

//FUNCION NORMAL COMUN MANEJO ERROR
async function manejoError(condicion){
    try{
        const resultado = await esperar(condicion);
        console.log(resultado);
        
    }catch(error){      //aca capturo el error y lo controlo yo

        console.log(error);
    }
}
