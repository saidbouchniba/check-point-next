import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{display:"flex" , justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
<Image style={{borderRadius:"50%", marginBottom:"5%"}} src={"https://cdn-icons-png.flaticon.com/512/4079/4079259.png"} width={400} height={400} alt="Dev"/>
<h1>My name is Said Bouchniba</h1>
<div style={{display:"flex", justifyContent:"space-around", width:"30%", marginTop:"50px"}}>
  <a href="/Skills">Skills</a>
  <a href="/Projects">Projects</a>
  <a href="/Contact">Contact</a>
</div>



    </div>
  );
}
