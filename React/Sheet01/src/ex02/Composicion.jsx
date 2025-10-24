import { Saludo } from "./../ex01/Saludo.jsx"

export const Composicion = () => {
    return <div className="saludos">
        <Saludo nombre="Ana"></Saludo>
        <Saludo nombre="Luis"></Saludo>
        <Saludo nombre="Marta"></Saludo>
    </div>
}