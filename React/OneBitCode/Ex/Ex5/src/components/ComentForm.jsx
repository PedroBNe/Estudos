import Input from "./Input"

export default function ComentForm(){

  const enviar = (ev) => {
    ev.preventDefault()
    console.log(ev.target)
  }

  return (
    <form onSubmit={enviar}>
      <Input />
      <Input />
      <button type="submit">Enviar Comentário</button>
    </form>
  )
}