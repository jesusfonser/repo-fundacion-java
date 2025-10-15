function procesar(lista, transformador){
    
    const nuevo_array = lista.map((elem, ind) => transformador(elem, ind))
    
    return nuevo_array
}

function aMayusculas(v){
    return v.toUpperCase();
}

function etiquetaIndice(v, i){
    return `#${i}:${v}`
}

const base = ['a','b'];
const t1 = procesar(base, v=>v.toUpperCase());
console.log(t1.join(',')); 
console.log(base.join(',')); 

console.log(procesar(['a','b'], aMayusculas))