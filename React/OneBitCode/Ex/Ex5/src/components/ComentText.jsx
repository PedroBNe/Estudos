import PropTypes from "prop-types"

ComentText.propTypes = {
  email: PropTypes.string,
  coment: PropTypes.string,
  removeComent: PropTypes.func
}

export default function ComentText({ email, coment, removeComent}){

  return (
    <div>
      <p>{email}</p>
      <div>
        <p>Em 24/01</p>
        <p>{coment}</p>
        <button onClick={removeComent}>Remover</button>
      </div>
    </div>
  )
}