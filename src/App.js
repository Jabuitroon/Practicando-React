// Componente interactivo 
// Propiedad useState
import { useState } from "react";

// Construir el tablero
function Board({ xIsNext, squares, onPlay }) { // Board es controlado por las props que recibe. 

  function handleClick(i) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }
// Almacenar un historial de movimientos
  const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
    //El componente Game puede actualizar el componente Board cuando el usuario hace clic en un cuadrado
    onPlay(nextSquares); 
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  return  <>
          <div className="status">{status}</div>
          <div className="board-row">
          {/* Pasar datos a través de props */}
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/* Cada Cuadrado ahora recibirá una prop de value que será 'X', 'O', o null para los cuadrados vacíos. */}
              <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          </div>
          <div className="board-row">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
              <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
              <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          </div>
          <div className="board-row">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
              <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
              <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
          </div>
          </>
}

export default function Game() {
    // Almacenar el estado del juego en el componente Game
  const [history, setHistory] = useState([Array(9).fill(null)]); // crea una matriz con nueve elementos y establece cada uno de ellos en null.
  const [currentMove, setCurrentMove] = useState(0);
  
  const xIsNext = currentMove%2 ===0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    // crea una nueva matriz que contiene todos los elementos en history 
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
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
  return(
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )  
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}
