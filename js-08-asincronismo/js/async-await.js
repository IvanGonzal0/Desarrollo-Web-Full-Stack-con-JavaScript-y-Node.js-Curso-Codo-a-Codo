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



async function manejoError(condicion){
    try{
        const resultado = await esperar(condicion);
        console.log(resultado);
        
    }catch(error){      //aca capturo el error y lo controlo yo

        console.log(error);
    }
}

console.log("1");
manejoError(true);
console.log("2");