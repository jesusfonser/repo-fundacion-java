import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cabecera() {
  return <h2>Esta es la cabecera</h2>
}

function Tarjeta({ children}: { children: React.ReactNode }) {
  return <div style={{border: "1px black solid", boxShadow: "10px 5px 5px black"}}>
    {children}
  </div>
}

function App() {

  const texto = "Hola mira que texto tan chulo jaja";

  return (
    <>
      <Tarjeta>
        <Cabecera></Cabecera>
        <p>{texto}</p>
      </Tarjeta>
    </>
  )
}

export default App

/*

Crea dos componentes:
Cabecera → muestra un título ( children ).
Tarjeta → un contenedor con borde y sombra que recibe cualquier
contenido dentro.
En App , utiliza composición para anidar contenido dentro de Tarjeta , incluyendo
una Cabecera y un párrafo con texto.
Pistas:
Utiliza la prop especial children .
Usa estilos inline o Tailwind para diferenciar visualmente los bloques.
Objetivo: practicar composición y children en componentes anidados.

*/