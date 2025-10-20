/*const firstasync = () => setTimeout(() => {
    console.log("Consultando base de datos...")
    setTimeout(() => {
        console.log("Procesando datos...")
            console.log("Operación completada.");
        
    }, 1000)
}, 2000)

firstasync();
*/

//¡Ahora con promesas!

const firstasync = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Consultando base de datos...")
        resolve();
    }, 2000)
})

firstasync.then(() => {
    const secondasync = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Procesando datos...");
            resolve();
        }, 1000);
    })

    secondasync.then(() => console.log("Operación completada"))
})

/* En el intento con callbacks, el código del primer callback se ejecuta, dando lugar a
otro callback que, cuando se resuelve, da lugar a otro callback que acabará por resolverse también.
Aunque funciona, el código tiende a apilarse y a irse hacia la derecha, reduciendo así
la legibilidad.

Cuando usas promesas, asignas una promesa a una variable, en la que se llevará a cabo la 
primera tarea asincrónica. Después, cuando gestiones su resultado en el then, puedes crear
una segunda variable que almacene otra promesa, gestionada también con su propio then. Por la
manera en la que funciona, se consigue una mejor legibilidad del código. */