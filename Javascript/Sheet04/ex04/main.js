function updateCounter() {
    const tareas = document.querySelectorAll("li");
    tareas.length == 0 ? contador.innerText = "No hay tareas pendientes" :
        contador.innerText = `Tareas pendientes: ${tareas.length}`;
}

function createTask(texto) {
    const li = document.createElement("li");
    li.classList.toggle("tarea");
    li.innerText = texto;
    
    const button_complete = document.createElement("button");
    button_complete.innerText = 'Completar';
    button_complete.setAttribute("class", "task-button complete-button")

    const button_del = document.createElement("button");
    button_del.innerText = "Eliminar";
    button_del.setAttribute("class", "task-button delete-button");
    
    li.appendChild(button_complete);
    li.appendChild(button_del);

    ul.appendChild(li);
}

const eventEmptyTask = new CustomEvent("addEmptyTask", {
    detail: {message: "El campo no puede estar vacío"}
})

document.addEventListener("addEmptyTask", e => {
    console.log(e.detail.message);
})

const contenedor = document.getElementById("tareas");

const h2 = document.createElement("h2");
h2.innerText = "Mis tareas";

const ul = document.createElement("ul");
ul.id = "lista-tareas";

const contador = document.createElement("span");

createTask("Aprender JavaScript");
createTask("Practicar DOM");

contenedor.appendChild(h2);
contenedor.appendChild(contador);
contenedor.appendChild(ul);


updateCounter();

const formulario = document.createElement("form");
formulario.id = "form-tarea";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "descripcion");
input.setAttribute("placeholder", "Nueva tarea");

const span_err = document.createElement("span");

const button = document.createElement("button");
button.innerText = "Crear tarea";
button.setAttribute("type", "submit");
button.addEventListener("click", e => {
    e.preventDefault();
    if (input.value === '') {
        span_err.innerHTML = "<br>No has puesto ná loco";
        document.dispatchEvent(eventEmptyTask);
    } else {
        span_err.innerText = '';
        input.setCustomValidity('');
        createTask(input.value);
        updateCounter();
    }
})

contenedor.addEventListener("click", e => {
    const chosen_button = e.target;

    if (chosen_button.classList.contains("complete-button")) {
        const chosen_task = chosen_button.parentNode;
        chosen_task.classList.add("hecha");
    } else if (chosen_button.classList.contains("delete-button")){
        chosen_button.parentNode.remove();
        updateCounter();
    }
})

formulario.appendChild(input);
formulario.appendChild(button);
formulario.appendChild(span_err);
document.querySelector("body").appendChild(formulario);
