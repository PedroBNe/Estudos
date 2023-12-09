import Card from "./components/Card"
import styles from "./App.module.css"
import { Fragment } from "react"

export default function App(){
  return (
    //<Fragment className={styles.App}> Hoje o fragment pode ser substituido pelo ->
    <>
      <h1>Ex 2</h1>
      <Card title="Pôster: 1" />
      <Card title="Pôster: 2" />
      <Card title="Pôster: 3" />
    </>
    //</Fragment>
  )
}