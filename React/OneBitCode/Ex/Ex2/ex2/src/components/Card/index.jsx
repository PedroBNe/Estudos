import TextCard from "./TextCard"

export default function Card(){
  return (
    <div style={{display: "flex"}}>
      <img src="../../../public/banner.jpg" alt="Banner" />
      <TextCard />
    </div>
  )
}