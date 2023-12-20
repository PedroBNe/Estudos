import PropTypes from "prop-types"

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func
}

export default function Input({ id, label, value, setValue }){
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id} 
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  )
}