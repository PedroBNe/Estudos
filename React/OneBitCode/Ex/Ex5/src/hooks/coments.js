import { useState } from "react";

export default function coments(){
  const [coments, setComents] = useState(() => {
    const storedComents = localStorage.getItem('coments');
    if(!storedComents) return []
    return JSON.parse(storedComents)
  })

  const addComent = ({email, coment}) => {
    const id = Math.floor(Math.random() * 1000000)
    const coment = { id, email, coment }
    setComents(state => {
      const newComent = [...state, coment]
      localStorage.setItem('coments', JSON.stringify(newComent))
      return newComent
    })
  }

  const removeComent = (id) => {
    setComents(state => {
      const newComent = state.filter(coment => coment.id !== id)
      localStorage.setItem('coments', JSON.stringify(newComent))
      return newComent
    })
  }

  return { coments, addComent, removeComent}
}