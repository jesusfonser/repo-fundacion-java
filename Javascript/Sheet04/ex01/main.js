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

const tareas = document.querySelectorAll("li");
tareas.length == 0 ? contador.innerText = "No hay tareas pendientes" :
    contador.innerText = `Tareas pendientes: ${tareas.length}`;