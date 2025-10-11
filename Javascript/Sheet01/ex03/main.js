console.log("5" + 2);
console.log("5" - 2);
console.log(true + true);
console.log(false == 0);
console.log(10 === "10");
/*
En el primer caso da "52". Parece que JavaScript ha convertido el 2 en un string
y lo ha concatenado con el 5.

En el segundo caso da 3. JavaScript ha convertido el "5" en un número y le ha 
restado 2.

En el tercer caso nos sale 2. JavaScript ha convertido los booleanos true en 1 y los
ha sumado.

El cuarto caso imprime true. Según JavaScript, false y 0 valen lo mismo. De hecho,
si intentamos hacer true + false, el resultado es 1.

El último caso nos da false. Esto se debe a que, pese a presentar el mismo valor, 
JavaScript detecta que los tipos de ambos datos son distintos.
*/