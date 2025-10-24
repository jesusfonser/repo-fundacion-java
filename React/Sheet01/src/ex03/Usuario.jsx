export const Usuario = ({ nombre, edad }) => {
    return (<p>Nombre: {nombre} ({ edad ? `Edad: ${edad}` : "Edad no disponible" })</p>)
}