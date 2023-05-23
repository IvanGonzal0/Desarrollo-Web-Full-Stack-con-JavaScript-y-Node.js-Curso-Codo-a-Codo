//en ves usar el callback como en el script, vamos a usar promesas

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

multiplicar(2,1).then((response) => {
   console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
   return multiplicar(2,1);
})

.then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
    return multiplicar(2,2);
 })

 .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
    return multiplicar(2,3);
 })