import { useState, useEffect } from 'react'
import './App.css'

function Greeting({ name }: {name:string}) {
  const [nombre, setNombre] = useState(name);
  
  useEffect(() => {
    console.log(`Actualizando saludo para ${nombre}`)
  })

  const cambioNombre = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  }

  return <input value={nombre} onChange={ cambioNombre }></input>
}

function App() {

  return (
    <>
      <Greeting name="Alpargatez"></Greeting>
    </>
  )
}

export default App


/*

Objetivo didáctico: entender las dependencias de useEffect y cómo React
sincroniza y limpia correctamente al modificar props.

Nivel básico — “Saludo dependiente de props”

Crea un componente Greeting que reciba una prop name .

Usa useEffect para mostrar en consola cada vez que cambie el nombre:

"Actualizando saludo para <name>" .

Desde App , añade un <input> controlado que actualice la prop name con
cada pulsación.

Observa en consola cómo el efecto se ejecuta solo cuando cambia la prop.

*/