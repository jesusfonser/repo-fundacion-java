function formatearA(nombre, apellido){
    if(typeof(nombre) != "string" || 
        !nombre ||
        typeof(apellido) != "string" ||
        !apellido
    ){
        throw new TypeError("Error en los parámetros")
    }

    return `${apellido}, ${nombre}`
}

const formatearB = function(nombre, apellido){
    if(typeof(nombre) != "string" || 
        !nombre ||
        typeof(apellido) != "string" ||
        !apellido
    ){
        throw new TypeError("Error en los parámetros")
    }    
    
    return `${apellido}, ${nombre}`
}

const formatearC = (nombre, apellido) =>{
    if(typeof(nombre) != "string" || 
        !nombre ||
        typeof(apellido) != "string" ||
        !apellido
    ){
        throw new TypeError("Error en los parámetros")
    }

return `${apellido}, ${nombre}`}

try { 
    formatearA('', 'X'); 
    
} catch(e){ 
    console.log(e instanceof TypeError); 
}