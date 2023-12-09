import Button from "../Button"
import styles from "./styles.module.css"

export default function Card({image, name, bio, number, email, git, link, twi}){
  return (
    <div className={styles.Card}>
      <img src={image} alt="Foto de Perfil" />
      <h1>{name}</h1>
      <hr />
      <p>{bio}</p>
      <hr />
      <p>{number}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <Button type="GitHub" link={git} />
      <Button type="LinkedIn" link={link} />
      <Button type="Twitter" link={twi} />
    </div>
  )
}
