function updateCounter() {
    const tareas = document.querySelectorAll("li");
    tareas.length == 0 ? contador.innerText = "No hay tareas pendientes" :
        contador.innerText = `Tareas pendientes: ${tareas.length}`;
}

const contenedor = document.getElementById("tareas");

const h2 = document.createElement("h2");
h2.innerText = "Mis tareas";

const ul = document.createElement("ul");
ul.id = "lista-tareas";

const li1 = document.createElement("li");
li1.classList.toggle("tarea");
li1.innerText = "Aprender JavaScript";

const li2 = document.createElement("li");
li2.setAttribute("class", "tarea");
li2.innerText = "Practicar DOM";

const contador = document.createElement("span");

ul.appendChild(li1);
ul.appendChild(li2);

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
    } else {
        span_err.innerText = '';
        input.setCustomValidity('');
        console.log("Hola");
        const new_li = document.createElement("li");
        new_li.innerText = input.value;
        ul.appendChild(new_li);
        input.value = '';
        updateCounter();
    }
})

formulario.appendChild(input);
formulario.appendChild(button);
formulario.appendChild(span_err);
document.querySelector("body").appendChild(formulario);
