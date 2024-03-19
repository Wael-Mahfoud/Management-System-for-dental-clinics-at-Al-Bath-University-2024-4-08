import styles from './page.module.css'
export default function About (){

return(
<div className={styles.container}>


    <h1 className={styles.title}>About the site :</h1>
    <p className={styles.desc}>
      As a result of the difficulty experienced by students at the Faculty of Dentistry at Al-Baath University in finding cases to be treated in the practical department in the fourth and fifth years.<br/>
      The idea came from our website to solve this problem by:
    </p>

    <ul  id={styles.ol} >
      <li> Facilitating the communication process between students and patients</li>
      <li> Facilitating the process of searching for the status required by the student</li>
      <li>Allowing students' work grades to be evaluated during the semester by the supervising doctors in the departments </li>
    </ul>
</div>
)}