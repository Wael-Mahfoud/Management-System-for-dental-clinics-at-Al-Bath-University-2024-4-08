import Image from "next/image";
import styles from "./page.module.css";
import hero from "/public/images/login1.png";
import hero2 from "/public/images/login2.png";
import Link from "next/link";
export default function Singup() {
  return (
    <div className={styles.container}>
      
      
        <form className={styles.form}>
        <div className={styles.container1}>
        <Image src={hero} alt="student logo" />
        <Image src={hero2} alt="student logo" />
      </div>
       <p className={styles.sinup}>Sinup</p>
          <div className={styles.group}>
            
            <input
              type="text"
              required="true"
              className={styles.main_input}
            />
            <span className={styles.highlight_span}></span>
            <label className={styles.label}>Full Name</label>
          </div>
          <div  className={styles.container_1} >
<div className={styles.group}>
          <input type="text"  className={styles.main_input} required="true"/>
                <span className={styles.highlight_span}></span>
                  <label className={styles.label}>University ID</label>
                  </div>
          </div>
          <div className={styles.container_1}>
          <div className={styles.group}>
          <input type="Password"  className={styles.main_input} required="true"/>
                <span className={styles.highlight_span}></span>
                  <label className={styles.label}>Password</label>
                  </div>
                    </div>
          <div className={styles.buttoncontainer}>
            <button type={"submit"} className={styles.button}>
              Sing up
            </button>
            <Link href="/">
              {" "}
              <button  className={styles.button}>
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    
  );
}
