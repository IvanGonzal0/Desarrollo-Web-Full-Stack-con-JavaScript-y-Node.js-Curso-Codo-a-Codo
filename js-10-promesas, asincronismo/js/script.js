const multiplicar = (num1,num2, callback) => {

    const resultado = num1 * num2;
    //voy agregar asincronismo a la funcion multiplicar
    setTimeout(() =>{

        callback(num1,num2, resultado);

    }, Math.floor(Math.random() * 2000));

};




// const mostrarResultado = (num1, num2, resultado) => {
//     console.log(`${num1} * ${num2} = ${resultado}`)
// }



//aca hago las tareas por orden(ENCADENADO)
multiplicar(2,1,(a,b,resultado) =>{
    console.log(`${a} * ${b} = ${resultado}`);

    multiplicar(2,2,(a,b,resultado) =>{
        console.log(`${a} * ${b} = ${resultado}`);
    })

});


// multiplicar(2,1, mostrarResultado);

// multiplicar(2,2, mostrarResultado);

// multiplicar(2,3, mostrarResultado);