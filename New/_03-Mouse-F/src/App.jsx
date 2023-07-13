import { useState, useEffect} from 'react'
import './App.css'
import './index.css'

function App() {

const [enable, setEnabled] = useState(false)
const [pos,setPos] = useState({x:0 , y:0})
  useEffect(() => {
    console.log('effect',{ enable })
      const handleMove = (event) =>{
          const { clientX, clientY} = event
            setPos({ x:clientX, y:clientY })
      }
      if (enable) { //Las dependencias deciden si ejecutar eso o no
        window.addEventListener('pointermove', handleMove) //Hay que hacer un CleanuseEffect para poder parar este seguimiento
      }
      return () =>{
        window.removeEventListener('pointermove', handleMove)
      }
  }, [enable])

  return (
    <>
    <div style={
        {position: 'absolute',
        backgroundColor: 'slateblue',
        borderRadius: '50%',
        opacity: 0.8,
        pointervents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${pos.x}px, ${pos.y}px)`}
    }
    />
      <main>
        <button onClick={()=> setEnabled(!enable)}>
          {enable ? 'Desactivar' : 'Activar'}
        </button>
      </main>
    </>
  )
}

export default App
