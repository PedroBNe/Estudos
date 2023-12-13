import { useState } from 'react';
import './App.css'
import Input from './components/Input';

function App() {

  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generate(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
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
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>
      <button onClick={copyToClipboard}>{copy}</button>
      <p>{password}</p>
    </div>
  )
}

export default App
