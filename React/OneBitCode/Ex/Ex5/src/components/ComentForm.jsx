import Input from "./Input"

export default function ComentForm(){

  const enviar = (ev) => {
    ev.preventDefault()
    console.log(ev.target)
  }

  return (
    <form onSubmit={enviar}>
      <Input id="email" label="Email" value={title} setValue={setTitle} />
      <Input id="title" label="Comentário" value={title} setValue={setTitle} />
      <button type="submit">Enviar Comentário</button>
    </form>
  )
}