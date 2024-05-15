import Image from 'next/image'
import styles from './page.module.css'
import { image } from './data'

export default function Information (){

return(
<div className={styles.container}>

       <div className={styles.desc}>
            <p >The Faculty of Dentistry at Al-Baath University was established in Homs, Syria, in 1996.The college aims to train and qualify students to practice the dental profession with  high efficiency and provide specialized health services to the community.</p>
            
            <p>The college includes a number of departments and specialties in the field of oral and maxillofacial medicine and surgery, and offers educational programs at the bachelor's, master's and doctoral levels.</p>
            
            <p>The Faculty of Dentistry at Al-Baath University is characterized by providing a modern educational environment equipped with the latest technologies and medical equipment. The college also organizes many seminars, scientific workshops and cultural and social activities to enhance students' skills and enhance communication between them.</p>
            
            <p>The college is staffed by a group of experienced and highly qualified professors and researchers in the field of dentistry, who work to guide and support students during their university studies.</p>
            
        


      <h2 className={styles.title}>The vision and values of the College: </h2>
    <ul style={{fontSize:"19px"}} className={styles.ull}>
      <li>The vision is for the Dental College to become a distinguished institution with excellent capacity in medical education, scientific research, and healthcare provision at both regional and international levels</li>
      <li>The commitment to individual rights to access the best healthcare and privacy protection, while understanding the diversity of society and being committed to it.</li>
      <li>Building sustainable companies and supporting them in educational hospitals, the healthcare system, and various local and international healthcare sectors with the aim of improving the health status of the Syrian community, especially at the regional and international levels</li>
      <li>Respect for scientific, academic, ethical, and legal principles in education, scientific research, and healthcare provision.</li>
      <li>Commitment to creating a supportive environment for the excellence and creativity of students, faculty, and all healthcare workers throughout their live</li>
      <li>Working to enhance health, preserve it, and restore it within the national healthcare system at all levels.</li>
      <li>Working as part of a team to meet patients' needs with high-quality clinical performance, responsibility, and ethics while considering the individual within their family and community.</li>
      <li>Ability to demonstrate the required professionalism in dealing with patients, colleagues, and other medical professionals, including necessary communication skills.</li>
      <li>Capability to adhere to the ethical principles of the medical profession.</li>
      <li>Ability to critically evaluate medical practice.</li>
      <li>Capability to advance in postgraduate studies and research work.</li>
      <li>Ability to self-develop and engage in lifelong learning.</li>
    </ul>
    
    <h2 className={styles.title}>The goals of the dental college are:</h2>
    <ul style={{ fontSize:"19px"}} className={styles.ull}>
      <li>To prepare highly competent dental practitioners who are aware of the oral health needs of the community, effectively contributing to providing oral and dental healthcare, both preventive and therapeuticw, to all citizens.</li>
      <li>To prepare dentists for advanced specialized studies and scientific research that align with the needs of the country and the economic and social development plans in the Syrian Arab Republic and the Arab world.</li>
      <li>Developing higher education in dentistry in a way that meets the healthcare needs of the community, keeps pace with advancements, and embraces scientific and practical technology.</li>
      <li>Preparing specialists in various fields of dentistry and equipping them with a high level of knowledge in their respective specialties.</li>
      <li>Nurturing and advancing scientific research in applied clinical dental sciences, fostering a culture of teamwork and scientific inquiry among graduates to become part of the medical team contributing to public health.</li>
      <li>Fostering a spirit of collective medical work and strengthening collaboration with all sectors involved in healthcare within the country.</li>
      <li>Developing research and teaching methods and principles, including producing academic and reference publications, translating selected foreign sources, especially recent ones, and standardizing Arabic medical terminology.</li>
      <li>Establishing qualification, training, and continuous education courses for graduates of dental colleges working in various specialties, to enhance services in both the public and private sectors and connect universities with community needs.</li>
      <li>Documenting cultural connections with relevant medical colleges and scientific organizations within the country, as well as Arab and foreign dental colleges, with the aim of advancing scientific research and postgraduate studies.</li>
      
    </ul>


    <h2 className={styles.title}>The college's mission:</h2>
    <p>"The dental college at government universities aims for excellence in training and preparing students during undergraduate and postgraduate studies according to high professional and ethical standards, preparing dentists capable of practicing the profession and enhancing oral and general health and continuous learning."</p>

    <h2 className={styles.title}>The specialties available at the Faculty of Dentistry at Al-Baath University differed in terms of clinical specialties and non-clinical specialties.</h2>
             <p>Examples of clinical specialties include:</p>
            <ul style={{fontSize:"19px"}}  className={styles.ull}>
              <li> General Dentistry</li>
              <li>Prosthodontics</li>
              <li>Orthodontics</li>
              <li>Oral and Maxillofacial Surgery</li>
              <li>Pediatric Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Preventive Dentistry</li>
            </ul>
        
            <h2 className={styles.title} >As for non-clinical specialties at the Faculty of Dentistry at Al-Baath University, they can include : </h2>
            <ul style={{fontSize:"19px"}} className={styles.ull} >
              <li>Anatomy</li>
              <li>Clinical pathology</li>
              <li>Oral and maxillofacial physiology</li>
              <li>Dental Materials Science</li>
              <li>Diagnosis of oral diseases</li>
              <li>Diagnostic radiology</li>
              <li>Public Health Science in Dentistry</li>
            </ul>


      <div className={styles.imagecontainer}>
        { image.map(img=><Image key={img.id} src={`/images/${img.name}.jpg`} width={250} height={250} className={styles.image} alt='faculty'/>)
        }  
</div>
<br/>
  <div className={styles.detail}>

        <div className={styles.location}>
            <h3 className={styles.title}>Address: </h3>
            <p>Homs - Damascus Road.</p>
        </div>

        <div className={styles.link}>
            <h3 className={styles.title}>Official website of the Faculty of Dentistry:</h3>
            <a href='https://albaath-univ.edu.sy/den/'>Click here</a>
        </div>
        <div>
        <h3 className={styles.title}>Email:<br/> den@albaath-univ.edu.sy</h3>
        </div>
        <div>
        <h3 className={styles.title}>Fax:<br/> 013/2162003.</h3>
        </div>
  </div>

</div>

</div>
)}