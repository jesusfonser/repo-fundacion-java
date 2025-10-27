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
      <RoomStatus roomId="lobby"></RoomStatus>
    </>
  )
}

export default App

function RoomStatus({ roomId } : {roomId : string}) {
  
  const [id, setId] = useState(roomId);

  const selectRoom = (e : React.MouseEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  }

  useEffect(() => {
    console.log(`Connecting to room: ${id}`)
    const conexionTime = setTimeout(() => {
      console.log(`Connected to room: ${id}`)
    }, 2000)

    return () => {
      console.log(`Disconnected from room: ${id}`)
      clearTimeout(conexionTime);
    } 
  }, [id])

  return(
    <div>
      <input name="room" type="radio" value="general" onClick={selectRoom}></input>
      <input name="room" type="radio" value="random" onClick={selectRoom}></input>
      <input name="room" type="radio" value="soporte" onClick={selectRoom}></input>
  </div>)
    
}


/*

Crea un componente RoomStatus que reciba una prop roomId (por ejemplo
"general" , "soporte" , "random" ).

Al montarse o cuando cambie roomId , muestra: "Connecting to room: <id>" .

Usa un setTimeout de 2 segundos para simular la conexión y luego muestra
"Connected to room: <id>" .

En el cleanup, imprime "Disconnected from room: <id>" .

En el padre ( App ), añade un <select> que cambie la prop roomId .

Observa en consola la secuencia de conexión y desconexión según
cambias de sala.

*/