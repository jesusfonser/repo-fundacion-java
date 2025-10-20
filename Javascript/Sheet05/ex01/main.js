console.log("Inicio");
setTimeout(() => console.log("setTimeout ejecutado"), 0);
Promise.resolve().then(() => console.log("Promesa resuelta"));
console.log("Fin");

/*

"Promesa resuelta" aparece antes porque las tareas ejecutadas por la API de Promesas
de JavaScript constituyen "microtareas". A la hora de activar el Event Loop, JavaScript
prioriza las microtareas antes que las macrotareas. setTimeout() es una macrotarea.

*/