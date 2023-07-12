import { lines } from './constantes.js'
// Puedo separar código Js que es lógica para dejar un poco más limpio los componentes y sus renders
export function calculateWinner (sQ) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (sQ[a] && sQ[a] === sQ[b] && sQ[a] === sQ[c]) {
      return sQ[a]
    }
  }
  return null
}
