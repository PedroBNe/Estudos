import { useState } from "react";

export default function ButtonCopy(props){

  const [copiado, setCopiado] = useState(false);

  function copy(){
    navigator.clipboard.writeText(props.senha);

    setCopiado(true)

    setTimeout(
      () => setCopiado(false),
      2000
    )

  }

  return (
    <button onClick={copy}>{copiado ? "Copiado!" : "Copiar"}</button>
  )
}