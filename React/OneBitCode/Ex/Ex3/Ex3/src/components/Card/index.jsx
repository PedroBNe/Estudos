import Button from "../Button"
import Title from "../Title"
import Section from "./Section"
import styles from "./styles.module.css"

export default function Card({image, name, bio, number, email, git, link, twi}){
  return (
    <div className={styles.Card}>
      <img src={image} alt="Foto de Perfil" />
      <Title>
        <span>{name}</span>
        <button>Seguir</button>
      </Title>
      <Section>{bio}</Section>
      <Section>{number}</Section>
      <Section>{email}</Section>
      <Button type="GitHub" link={git} />
      <Button type="LinkedIn" link={link} />
      <Button type="Twitter" link={twi} />
    </div>
  )
}
