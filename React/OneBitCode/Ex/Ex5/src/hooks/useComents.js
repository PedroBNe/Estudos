import { useState } from "react";

export default function useComents(){
  const [coments, setComents] = useState(() => {
    const storedComents = localStorage.getItem('coments');
    if(!storedComents) return []
    return JSON.parse(storedComents)
  })

  const addComent = ({email, coment}) => {
    const id = Math.floor(Math.random() * 1000000)
    const comentText = { id, email, coment }
    setComents(state => {
      const newState = [...state, comentText]
      localStorage.setItem('coments', JSON.stringify(newState))
      return newState
    })
  }

  const removeComent = (id) => {
    setComents(state => {
      const newState = state.filter(comentText => comentText.id !== id)
      localStorage.setItem('coments', JSON.stringify(newState))
      return newState
    })
  }

  return { coments, addComent, removeComent}
}