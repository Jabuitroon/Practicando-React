import { useState, useEffect} from 'react'

export const FollowMouse = () => {

    const [enable, setEnabled] = useState(false)
    const [pos,setPos] = useState({x:0 , y:0})

    // pointer move
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
            // Eltrucazo para ver los eventos y cuantas veces ocurre getEventListener('pointermove')
          }
      }, [enable])
    // [] Solo se ejecuta una vez en su componente
    // [enable] se ejecuta segun las dependencias
    // Undefined se ejecuta cada que se renderiza el componente las veces que sea

    // Change body className
        useEffect(()=>{
        document.body.classList.toggle('no-cursor', enable)
        return () => {
        document.body.classList.remove('no-cursor')
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