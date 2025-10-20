const firstasync = () => setTimeout(() => {
    console.log("Consultando base de datos...")
    setTimeout(() => {
        console.log("Procesando datos...")
            console.log("Operación completada.");
        
    }, 1000)
}, 2000)

firstasync();