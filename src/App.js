// Componente interactivo 
// Propiedad useState
import { useState } from "react";
import { Twifollowcard } from "./components/Twifollowcard.jsx";
import { Listas } from "./components/Listas.jsx"
import "./tictt.css"
import { TicTacToe } from "./main.jsx"

export default function Game() {
    // Almacenar el estado del juego en el componente Game
  const [history, setHistory] = useState([Array(9).fill(null)]); // crea una matriz con nueve elementos y establece cada uno de ellos en null.
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove%2 ===0;
  const currentSquares = history[currentMove]; //el actual turno sobre el array history

  function handlePlay(nextSquares) {
    // crea una nueva matriz que contiene todos los elementos en history 
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    //Spread operator transforma un array en una lista de argumentos
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1)
  }
  // Se recomienda asignar las key adecuadas cada vez que cree listas dinámicas
  // tambien se puede considerar reestructurar los datos para que las tenga.
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // .map para transformar la matriz de movimientos history en elementos React que representen botones en la pantalla
  const moves = history.map((squares, move) => {
    let description;
    console.log(move)
    if (move > 0) {
      description = 'Ir al movimiento #' + move;
    } else {
      description = 'Ir al inicio del juego';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
          const format = (userName) => `@${userName}` //Podemos pasar funciones o callbacks como props
          const crearElement = (<span>@Elemento</span>) //Creando un elemento para pasarlo como prop

          // const miduObj = {name: 'Mgueloon',
          //                   isFollowing:true,
          //                   userName: 'midudev'}
          let contador = 1;
          const infoMoves = history.map((move) =>{
            let description = 'Estás en el movimiento #' + contador++;
            return <p>{description}</p>
          });
  //Conociendo al virtual dom
  const [name, setName] = useState('Julio')
return( // return es lo que devuelvo para renderizar
    <div className="game">
      <div className="game-ttc">
          <p>{infoMoves}</p>
          <TicTacToe xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div>
        {/* se pasan funciones como props */}
        <Twifollowcard formatUserName={format} initialFollowage userName="Matazmb" name={name}/>
        <Twifollowcard formatUserName={format} initialFollowage={false} userName="Matazmb" name="Mguelón"/>{/* <Twifollowcard formatUserName={crearElement} userName="Matazmb" name="Mguelón"/>  Se pasan elementos como props*/}
        {/* <Twifollowcard {...miduObj}/> enviando props desde un Obj == rest operator pero espreferible ser declarativo*/}
        <button onClick={()=> setName('Buitroon')}>Cambiar nombre</button>
        <Listas />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )  
}