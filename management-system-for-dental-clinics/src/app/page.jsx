import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.png"
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    

    <div>      
      <Navbar/>
      <hr/>
      <div className={styles.container}>    
    <div className={styles.col}>
        <h1 className={styles.title}>Welcome to the Website of Dental Clinics at Al-Baath University </h1>
        <p  className ={styles.description}>A service site to facilitate communication between students and patients</p>
        <div>
          <h5>PATIENT :</h5>
          <div className={styles.buttoncontainer}>

          <Link  href="/patient"><button className={styles.button}> New Case </button></Link>        
  

          </div>
        </div>
    </div>

    <div className={styles.col} > 
      <Image className={styles.img} src={Hero} alt='Dental Clinics'/>
      <div>

        <h5>STUDENT :</h5>
        <div className={styles.buttoncontainer}>
        <Link  href="/login"><button className={styles.button}> Log In </button></Link>
        <h3>or</h3>
        <Link href="/signup"><button className={styles.button}> Sign up </button></Link>
        </div>
      </div>
    </div>

            </div>
          <hr/>
        <Footer/>
        </div>
    
);
}
