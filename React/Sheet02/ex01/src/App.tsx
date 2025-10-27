import { useState } from 'react'

type MensajePersonalizadoProps = {
  texto: string;
  color: string;
}

function MensajePersonalizado({ texto, color } : MensajePersonalizadoProps) {
  return <div style = {{backgroundColor: color, textAlign: "center"}}>
    { texto }
  </div>
}

function App() {

  return (
    <>
    <MensajePersonalizado texto="Este es el primer mensaje" color="red"></MensajePersonalizado>
    <MensajePersonalizado texto="Este es el segundo mensaje" color="blue"></MensajePersonalizado>
    <MensajePersonalizado texto="Este es el tercer mensaje" color="green"></MensajePersonalizado>
    </>
  )
}

export default App

/*

Crea un componente llamado MensajePersonalizado que reciba dos props:
texto : un string con el contenido del mensaje.
color : el color de fondo del mensaje (ej. "lightblue" , "tomato" , etc.).
El componente debe renderizar un <div> con ese color de fondo y el texto
centrado.
Requisitos:
Usa destructuración de props.
El componente padre ( App ) debe renderizar tres mensajes con colores y
textos distintos.
Objetivo: comprender cómo las props permiten

*/