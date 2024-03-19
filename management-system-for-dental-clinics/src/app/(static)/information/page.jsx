import Image from 'next/image'
import styles from './page.module.css'
import { image } from './data'

export default function Information (){

return(
<div className={styles.container}>

       <div className={styles.desc}>
            <p >The Faculty of Dentistry at Al-Baath University was established in Homs, Syria, in 2000.The college aims to train and qualify students to practice the dental profession with  high efficiency and provide specialized health services to the community.</p>
            
            <p>The college includes a number of departments and specialties in the field of oral and maxillofacial medicine and surgery, and offers educational programs at the bachelor's, master's and doctoral levels.</p>
            
            <p>The Faculty of Dentistry at Al-Baath University is characterized by providing a modern educational environment equipped with the latest technologies and medical equipment. The college also organizes many seminars, scientific workshops and cultural and social activities to enhance students' skills and enhance communication between them.</p>
            
            <p>The college is staffed by a group of experienced and highly qualified professors and researchers in the field of dentistry, who work to guide and support students during their university studies.</p>
            
            <p style={{fontWeight:'525'}}>The specialties available at the Faculty of Dentistry at Al-Baath University differed in terms of clinical specialties and non-clinical specialties. Examples of clinical specialties include:</p>
             
            <ul style={{marginLeft:'50px' ,fontSize:"19px"}} >
              <li> General Dentistry</li>
              <li>Prosthodontics</li>
              <li>Orthodontics</li>
              <li>Oral and Maxillofacial Surgery</li>
              <li>Pediatric Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Preventive Dentistry</li>
            </ul>
        
            <p style={{fontWeight:'525'}}>As for non-clinical specialties at the Faculty of Dentistry at Al-Baath University, they can include : </p>
            <ul style={{marginLeft:'50px' ,fontSize:"19px"}} >
              <li>Anatomy</li>
              <li>Clinical pathology</li>
              <li>Oral and maxillofacial physiology</li>
              <li>Dental Materials Science</li>
              <li>Diagnosis of oral diseases</li>
              <li>Diagnostic radiology</li>
              <li>Public Health Science in Dentistry</li>
            </ul>

      </div>

      <div className={styles.imagecontainer}>
        { image.map(img=><Image key={img.id} src={`/images/${img.name}.jpg`} width={250} height={250} className={styles.image} alt='faculty'/>)
        }  
</div>

  <div className={styles.detail}>

        <div className={styles.location}>
            <h2 className={styles.title}>Location :</h2>
            <p>Homs - Al Wahda Street- Al Baath University</p>
        </div>

        <div className={styles.link}>
            <h2 className={styles.title}>Website :</h2>
            <a href='https://albaath-univ.edu.sy/den/'>Click here</a>
        </div>
  </div>
</div>


)}