import { useState } from "react";
import randomatic from 'randomatic';

function getInitialValue(){
  return ""
}

export default function useSenha(){
  const [senha, setSenha] = useState(() => getInitialValue())

  const gerar = () => {
    setSenha(() =>  randomatic('A0', 10))
  }

  return { senha, gerar }
}