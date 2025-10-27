import './App.css'

function IconoNotificacion({mensaje} : {mensaje: string}) {
  return <p>🔔 { mensaje }</p>
}


function Panel({mensaje} : {mensaje: string}) {
  return <IconoNotificacion mensaje={ mensaje }></IconoNotificacion>
}


function App() {

  const mensaje = "Tienes 3 mensajes nuevos";

  return( 
    <div>
    <Panel mensaje={ mensaje }>
    </Panel>
    </div>)
  
}

export default App

/*

Esto (Prop Drilling) es insostenible porque, para que llegue la informacion a los componentes deseados, 
se debe ir pasando por todos ellos sin que estos lo necesiten. Esto acabará por afectar
a la legibilidad del código y a su mantenibilidad en el futuro.

*/

