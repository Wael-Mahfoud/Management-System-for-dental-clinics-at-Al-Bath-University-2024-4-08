import Image from "next/image"
import styles from "./page.module.css"
import hero from "/public/images/login1.png"
import hero2 from "/public/images/login2.png"
import Link from "next/link"
export default function Singup (){
    return(
<div className={styles.container}>
        <div className={styles.container1}>
            
        <Image src={hero}   alt="student logo"/>    
        <Image src={hero2}   alt="student logo"/>    
        </div>
        <div className={styles.container2}>
        
            <form className={styles.form}> 
        
                <div>
                    <p className={styles.title}>Enter your Full Name :</p>
                    <input type="text" placeholder="Full Name"  className={styles.element}/>
                </div>
                <div>
                    <p className={styles.title}>Enter your University ID :</p>
                    <input type="text" placeholder="University ID" className={styles.element}/>
                </div>
                <div>
                <p className={styles.title}>Enter your Password :</p>
                <input type="Password" placeholder="Password" className={styles.element}/>
                   </div>
                <div className={styles.buttoncontainer}>
                <button type={"submit"} className={styles.button}>Sing up</button>
              <Link href="/"> <button style={{marginLeft:"74px"}}  className={styles.button}>Back</button></Link> 
                
                </div>

            </form>
            
            
             </div>
             </div>
    )
}