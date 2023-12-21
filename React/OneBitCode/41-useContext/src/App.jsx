import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"
import Container from "./components/Container"

export default function App(){

  const user = {
    name: "João",
    email: "joao@email.com"
  }

  return (
    <UserContext.Provider value={user}>
      <h1>Usando Contexto</h1>
      <Container>
        <UserInfo />
      </Container>
    </UserContext.Provider>
  )
}