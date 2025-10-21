function esperar(ms) {
    const promesita = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("¡Promesita resuelta, vecinito!")
            resolve();
        }, ms)
    })

    return promesita;
}

async function secuencia() {
    console.log("Inicio del progreso...");
    await esperar(1000);
    console.log("Cargando configuración...");
    await esperar(1500);
    console.log("Proceso completado.");
}

secuencia();