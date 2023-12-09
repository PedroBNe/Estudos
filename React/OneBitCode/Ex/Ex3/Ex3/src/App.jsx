import Card from "./components/Card"
import profile from "./assets/profile.jpg"
import style from "./App.module.css"

export default function App(){
  return (
    <div className={style.App}>
      <Card
        image={profile}
        name="Pedro"
        bio="Full-stack"
        number="48 99999-9999"
        email="pedro@gmail.com"
        git="https://github.com/PedroBNe"
        link="https://linkedin.com/in/pedro-barreto-neto"
        twi="google.com"
      />
    </div>
  )
}