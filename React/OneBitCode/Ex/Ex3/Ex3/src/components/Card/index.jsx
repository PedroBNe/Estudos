import Button from "../Button"
import Title from "../Title"
import Section from "./Section"
import styles from "./styles.module.css"

function handleClick(ev){
  console.log(ev)
  alert("teste")
}

export default function Card({image, name, bio, number, email, git, link, twi}){

  return (
    <div className={styles.Card}>
      <img src={image} alt="Foto de Perfil" />
      <Title>
        <span>{name}</span>
        <button
        className={styles.followButton}
          onClick={handleClick}
        >Seguir</button>
      </Title>
      <Section>{bio}</Section>
      <Section>{number}</Section>
      <Section>{email}</Section>
      <Section
        className={styles.links}
        id="links-section"
        data-test="some value"
        arial-label="social links"
      >
        <Button type="GitHub" link={git} />
        <Button type="LinkedIn" link={link} />
        <Button type="Twitter" link={twi} />
      </Section>
    </div>
  )
}
