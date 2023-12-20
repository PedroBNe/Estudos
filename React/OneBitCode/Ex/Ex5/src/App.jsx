import ComentForm from "./components/ComentForm"
import ComentText from "./components/ComentText"
import useComents from "./hooks/useComents"

function App() {

  const { coments, addComent, removeComent } = useComents()

  return (
    <div id='app'>
      <h1>Seção de comentários</h1>
      <ComentForm addComent={addComent} />
      <div className="coments">
        {coments.length > 0 
          ? coments.map((coment) => (
            <ComentText
              key={coment.id}
              email={coment.email}
              coment={coment.coment}
              removeComent={() => removeComent(coment.id)}
            />))
          : (
            <h2 style={{ margin: "4rem auto"}}>Seja o primeiro a comentar!</h2>
          )}
      </div>
    </div>
  )
}

export default App
