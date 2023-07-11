import { useState } from "react";
import confetti from "canvas-confetti";
import { calculateWinner } from "./JS/logic.js"
import { WinnerModal } from "./components/WinnerModal";
//Estado para saber si hay un ganador y cual
let status;
// Construir el tablero
export function TicTacToe({ xIsNext, squares, onPlay }) {// TicTacToe es controlado por las props que recibe.

const[winner, setWinner] = useState(null)
//Se resolvió viendo esto
//https://www.datainfinities.com/20/too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-infinite-loop#:~:text=Conclusion-,The%20React%20error%20%22Too%20many%20re%2Drenders.,put%20state%20changes%20inside%20it.
    const handleClick = index => {
        //Asi no permite sobreecribir en un square porque estamos pasando el ultimo estado del juego
        if (squares[index] || winner)   return;
    
        // Almacenar un historial de movimientos
        const nextSquares = squares.slice();
            if (xIsNext) {
                nextSquares[index] = "X"
            } else {
                nextSquares[index] = "O"
            }
            //El componente Game puede actualizar el componente Board cuando el usuario hace clic en un cuadrado
            onPlay(nextSquares); 

            const checkWinner = calculateWinner(nextSquares); //le pasamos el "nuevo tablero" a checkWinner
                if (checkWinner) {
                    confetti()
                    setWinner(checkWinner);
                    //status = "Ganador: " + checkWinner;
                    //alert("Ganador"+ checkWinner) El estado es asíncrono
                }   else if(checkEndGame(nextSquares)){
                    setWinner(false)
                }   else {
                    status = "Turno para: " + (xIsNext ? "X" : "O");
                }
    }

    const resetGame = () =>{ //Nuestra UI es replicable lo imoprtante son las props
        squares.fill(null);
        setWinner(null)
    }

    const checkEndGame = (tablero) =>{
        return tablero.every((squares) => squares != null) //Si todas las casilles estan llenas ....
    }

return  <>
        <div className="board">
        <div className="status">{status}</div>
            <section className="game">
                {
                squares.map((_,index)=>{
                    return(
                        <Square key={index} onSquareClick={() => handleClick(index)}>
                            {squares[index]}
                        </Square>
                    )
                })
            }
            </section>
            {/* Renderizado condicional */}
            <WinnerModal winner={winner} resetGame={resetGame}/>
                {/* <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                </div>*/}
        </div>
        </>
}

export function Square({children, onSquareClick}) { //Asi puedo exportar una funcion para usarla en otro componente
        return  (
            <button className="square" onClick={onSquareClick}>{children}</button>
        )
}