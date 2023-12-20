import { useState } from "react"
import PropTypes from "prop-types"
import Input from "./Input"

ComentForm.propTypes = {
  addComent: PropTypes.func
}

export default function ComentForm( {addComent} ){

  const [email, setEmail] = useState("")
  const [coment, setComent] = useState("")

  const enviar = (ev) => {
    ev.preventDefault()
    addComent({ email, coment })
    setEmail("")
    setComent("")
  }

  return (
    <form onSubmit={enviar}>
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Input id="coment" label="Comentário" value={coment} setValue={setComent} />
      <button type="submit">Enviar Comentário</button>
    </form>
  )
}