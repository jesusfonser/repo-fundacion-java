var numerico = 1;
let texto = "hola profe";
const booleano = false;

console.log(numerico);
console.log("La variable 'numerico' es reasignable");
//La variable "numerico", al ser declarada con var, puede reasignarse.
//También puede redeclararse, y puede ser "hoisteadas" sin inicialización.

console.log(texto);
console.log("La variable 'texto' es reasignable");
//La variable "texto", al ser declarada con let, puede reasignarse.
//Sin embargo, no puede redeclararse. Puede "hoistearse", pero acaba en la TDZ.

console.log(booleano);
console.log("La variable 'booleano' NO es reasignable");
//La variable "booleano", al ser declarada con const, no puede reasignarse.
//Tampoco puede redeclararse. Se puede "hoistear", pero acaba en la TDZ.