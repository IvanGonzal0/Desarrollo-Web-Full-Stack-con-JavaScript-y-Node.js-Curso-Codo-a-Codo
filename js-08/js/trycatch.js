function manejoError(condicion){
    try{
        if(condicion){
            console.log("Todo OK");
        }else{
            throw new Error("Algo salio mal");  //aca agarro el error
        }

    }catch(error){      //aca capturo el error y lo controlo yo

        console.log(error);
    }
}

manejoError(false);
