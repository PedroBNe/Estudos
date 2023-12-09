export default function Button({ type, link }){
  return (
    <>
      <a href={link} target="_black">
        <button>{type}</button>
      </a>
    </>
  )
}