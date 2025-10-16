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


ul.appendChild(li1);
ul.appendChild(li2);

contenedor.appendChild(h2);
contenedor.appendChild(ul);