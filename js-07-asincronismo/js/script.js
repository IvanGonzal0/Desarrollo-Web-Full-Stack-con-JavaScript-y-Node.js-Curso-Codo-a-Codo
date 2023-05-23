// //ESTE ES UN PROYECTO CRUD(del lado del front)


let tareas = [];

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputId = document.querySelector("#id");
  const inputText = document.querySelector("#text");
//me voy a fijar si el elemento ya tiene un ID
  if (inputId.value) {
    tareas.forEach((tarea) => {

      if (tarea.id == inputId.value) {
        tarea.text = inputText.value;
      }
    });
//sino agrego el input text a la lista
  } else {
    tareas.push({
      id: Date.now(),   //esta es una forma de guardar un ID unico
      text: inputText.value,
      complete: false,
    });
  }
    //guardo una clave valor de tareas tareas
  localStorage.setItem("tareas", JSON.stringify(tareas));
    //le hago un clear  ala variable que guarda lo que tengo en el campo text & ID
  inputText.value = "";
  inputId.value = "";
  renderTareas();
});


const renderTareas = () => {

        tareas = JSON.parse(localStorage.getItem("tareas") || []);  //el parse es la inversa del stringify, lo tengo que hacer para poder leerlo en formato string

        const tbody = document.querySelector('tbody');
        tbody.innerHTML = "";


    tareas.forEach(
        tarea => tbody.innerHTML  += `

        <tr>
        <td class="${tarea.complete ? "complete" : ""}">${tarea.text}</td>
        <td>
            <button data-id="${tarea.id}" class="btn-completar">Completar</button>
            <button onclick="editarTarea(${tarea.id})">Editar</button>
            <button onclick="borrarTarea(${tarea.id})">Borrar</button>
        </td>
        </tr>
        `); 
};

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-completar')){
        
        completarTarea(e.target.dataset.id);
    }
})

//FUNCION COMPLETAR TAREA
const completarTarea = (id) => {
    tareas.forEach(tarea => {
        if (tarea.id == id){
            //si el id coincide hago lo siguiente
            tarea.complete = !tarea.complete;   //hago el opuesto,si tarea esta en falso lo dejo verdader, y al reves
        }
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderTareas();

};
//FIN FUNCION


//FUNCION EDITAR
const editarTarea = (id) => {

    const tarea = tareas.find(tarea => tarea.id == id);
    //conviene controlar si la tarea existe
    if(tarea){
        const inputId = document.querySelector("#id");
        //cuando encuentro la tarea al valor le asigo tarea.id
        inputId.value = tarea.id;

        //al input text le voy a asignar como valor, el texto de la tarea
        const inputText = document.querySelector("#text");
        inputText.value = tarea.text;
    }


}


//FIN FUNCION

//FUNCION BORRAR
const borrarTarea = (id) => {
    if (confirm('¿Esta seguro?')){

        const filtradas = tareas.filter(tarea => tarea.id != id);
        localStorage.setItem("tareas", JSON.stringify(filtradas));
        renderTareas();

    }
}
//FIN FUNCION




//cuando termine de cargarse todo el documento ejecuta esta funcion flecha con el renderTareas
document.addEventListener('DOMContentLoaded', () => {
    renderTareas();
    // const btnCompletar = document.querySelectorAll('.btn-completar');
    // console.log(btnCompletar);
});