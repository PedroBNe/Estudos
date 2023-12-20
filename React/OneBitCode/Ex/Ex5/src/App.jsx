import ComentForm from "./components/ComentForm"
import ComentText from "./components/ComentText"
import coments from "./hooks/coments"

function App() {

  const { coments, addComent, removeComent } = coments()

  return (
    <div id='app'>
      <h1>Seção de comentários</h1>
      <ComentForm  />
      <ComentText />
    </div>
  )
}

export default App
