import styles from "./styles.module.css"

export default function TextCard(props){
  return (
    <div className={styles}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores quo iste, fuga, totam est voluptas et cum numquam eligendi doloribus assumenda, quis corrupti labore! Corrupti voluptatum autem sunt ipsam!</p>
      <button className={styles.button}>Comprar agora</button>
    </div>
  )
}