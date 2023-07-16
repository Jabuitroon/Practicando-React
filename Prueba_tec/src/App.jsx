import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/${firstWord}/says/Hablamee?size=40&type=or&json=true`

export function App () {
  const [fact, setFact] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // La respuesta se trae como un JSON
      .then(data => setFact(data.fact))
  }, [])

  return (
    <>
      <h1>Gatitooos</h1>
      {fact && <p>{fact}</p>}
    </>
  )
}
