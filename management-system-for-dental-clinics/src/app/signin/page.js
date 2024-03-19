import Link from "next/link"
import styles from "./page.module.css"
export default function Signin (){
    return(
        <div className={styles.container}>
   
        
            <form className={styles.form}> 
        
                <div>
                <p className={styles.title}>Enter your University ID :</p>
                <input type="text" placeholder="University ID" className={styles.element}/>
                   </div>
                   <div>
                <p className={styles.title}>Enter your Password :</p>
                <input type="Password" placeholder="Password" className={styles.element}/>
                   </div>
                   <div className={styles.buttoncontainer}>
                <button type={"submit"} className={styles.button}>Sing In</button>
              <Link href="/"> <button style={{marginLeft:"72px"}}  className={styles.button}>Back</button></Link> 
                
                </div>
            </form>
            
            
             </div>

    )
}