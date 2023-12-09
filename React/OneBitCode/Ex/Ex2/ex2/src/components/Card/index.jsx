import TextCard from "./TextCard"
import banner from "../../assets/banner.jpg"
import style from "./style.module.css"

export default function Card(props){
  return (
    <div className={style.container}>
      <img src={banner} alt="Banner" className={style.poster} />
      <TextCard title={props.title} />
    </div>
  )
}