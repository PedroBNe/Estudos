import './App.css'
import Button from './components/Button'
import ButtonCopy from './components/ButtonCopy';
import useSenha from './hooks/useSenha'

function App() {

  const senhaController = useSenha();

  return (
    <div className='app'>
      <h1>Gerador de senhas</h1>
      <Button name={"Gerar"} onClick={senhaController.gerar} />
      <ButtonCopy senha={senhaController.senha} />
      <p>{senhaController.senha}</p>
    </div>
  )
}

export default App
