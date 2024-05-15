import Link from "next/link"
import styles from "./page.module.css"
export default function Signin (){
    return(
        <div className={styles.container}>
   
        
            <form className={styles.form}> 
                <p className={styles.login}>Login</p>
                <div className={styles.group}>
        
                <input className={styles.main_input} required="true" type="text"/>
                <span className={styles.highlight_span}></span>
                 <label className={styles.label}>University ID</label>
                   </div>
                 
                   <div className={styles.container_1}>
                    <div className={styles.group}>
                
                <input type="Password"  className={styles.main_input} required="true"/>
                <span className={styles.highlight_span}></span>
                  <label className={styles.label}>Password</label>
                   
                   </div>
                </div>
                   <div className={styles.buttoncontainer}>
                <button type={"submit"} className={styles.button}>Log In</button>
              <Link href="/"> <button  className={styles.button}>Back</button></Link> 
                
                </div>
            </form>
            
            
             </div>

    
            )
}