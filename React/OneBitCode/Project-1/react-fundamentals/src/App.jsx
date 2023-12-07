import StatusText from "./components/StatusText";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";
import styles from "./App.module.css"

function sum(a, b){
  return a + b;
}

export default function App(){

  return (
    <div className={styles.App}>
      <Title />
      <Subtitle />
      <h2>2 + 2 = {sum(2, 2)}</h2>
      <StatusText />
    </div>
  )
}