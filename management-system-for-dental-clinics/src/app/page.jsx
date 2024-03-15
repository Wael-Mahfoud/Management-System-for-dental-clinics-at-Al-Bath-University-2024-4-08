import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.png"
export default function Home() {
  return (
<div className={styles.container}>

    <div className={styles.col}>
        <h1 className={styles.title}>Welcome to the Website of Dental Clinics at Al-Baath University </h1>
        <p  className ={styles.description}>A service site to facilitate communication between students and patients</p>
        <div>
          <h5>PATIENT :</h5>
          <div className={styles.buttoncontainer}>
            <button  className ={styles.button}>NEW CASE</button>
          </div>
        </div>
    </div>

    <div className={styles.col}> 
      <Image className={styles.img} src={Hero} alt='Dental Clinics'/>
      <div>

        <h5>STUDENT :</h5>
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>Sing in</button>
          <button className={styles.button}>Log in</button>
        </div>
      </div>
    </div>
</div>

    );
}
