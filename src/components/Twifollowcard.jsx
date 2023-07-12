import logo from '../assets/cara.jpg'
// Importar Hooks permiten añadir funcionalidades a los componentes de react,
// poder ejecutarcodigo arbitrario segun lo que suceda en los compoentes
import { useState } from 'react'

export function Twifollowcard ({ formatUserName, userName = 'Ukn', name, initialFollowage }) {
  // La base de reutilizar un componente en React es que sea parametrizable metiante las prop,
  // enviando y recibiendo la info que necesitamos procesar
  const [isFollowing, setIsFolowing] = useState(initialFollowage) // Destructurando pae inicializando un estado con una prop
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClass = isFollowing ? 'tw-followcard-btn' : 'tw-Nofollow-btn'

  const handleClick = () => {
    setIsFolowing(!isFollowing) // le digo a la funcion setIsFolowing que invierta esta variable que tiene un boolean
  }

  return (
    <article className='tw-followcard'>
      <header className='tw-followcard-header'>
        <img className='tw-followcard-avatar' alt='avatar' src={logo} />
        <div className='tw-followcard-info'>
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>     {/* Recibiendo una funcion y ejecutandola */}
          {/* <span>{formatUserName}</span>    Recibiendo un elemento */}
          {/* <span>{userName}</span> Recibiendo userName pero como un atributo de un Obj */}
        </div>
      </header>
      <aside>
        <button className={btnClass} onClick={handleClick}>
          <span className='Normal'>{text}</span>
          <span className='StopFollow'>Dejar de seguir</span>
        </button>
        {/* React renderiza el componente dependiendo de ese primer render
                React hace una "comparación" entre otro render, pero los cambios se ejecutan directamente
                donde estoy declarando, como en este caso elestado del boton */}
      </aside>
    </article>
  )
}
