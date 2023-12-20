import { useEffect, useState } from "react"

function Counter(){
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    alert("Chamando API")

    return () => {
      alert("chamada cancelada")
    }
  }, [])

  return (
    <button onClick={() => setCounter(count => count + 1)}>
    Contador: {counter}
  </button>
  )
}

export default function App(){

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Conhecendo o useEffect</h1>
      <div>
        <input id="show" type="checkbox" value={show} onChange={() => setShow(state => !state)} />
        <label htmlFor="show">Exibir</label>
      </div>
      {
        show ? <Counter /> : null
      }
      <hr />
    </>
  )
}