import { useState } from 'react';
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")

  function generate(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)

    setCopy("Copiar")
  }

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    setCopy("Copiado")
  }

  return (
    <div className='app'>
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyToClipboard}>{copy}</button>
      <p>{password}</p>
    </div>
  )
}

export default App
