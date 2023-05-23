//es lka misma funcion con promesas

const multiplicar = (num1,num2) => {

    //validacion

    if(typeof num1 != "number" || typeof num2 != "number"){

        return Promise.reject("Alguno de los valores no es del tipo numero")
    }
    
    return new Promise((resolve,reject)=>{
        const resultado = num1 * num2;
        setTimeout(() =>{

            resolve({num1, num2, resultado});

        }, Math.floor(Math.random() * 2000));
    });
};

//el await y async van de la mano

//este es un codigo asincronico no bloqueante, (HACE TAREAS EN SEGUNDO PLANO)

const tabla = async () => {
    try{
        //tabla del 2 asincronica no bloqueante
        for(let i= 1; i<=10; i++){
            let response = await multiplicar(2,i);
            console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
        }
        

        // response = await multiplicar(2,2);
        // console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);

        // response = await multiplicar(2,3);
        // console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);

    }catch(error){
        console.log(error);

    }

}

tabla()