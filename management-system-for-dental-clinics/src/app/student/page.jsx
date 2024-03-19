import React from 'react'
import styles from "./page.module.css"
import Footer from '@/app/components/Footer/Footer'
import Image from 'next/image'
import hero from '/public/images/default image.png'
export default function StudentProfile(props) {
  return (

    
    <div className={styles.container}>
<div className={styles.col}>
<Image 
src={hero}
width={250}
height={250}
alt='student image'
className={styles.image}
/>

<div className={styles.upload}>
<label>Upload Your Image :</label>
<input type='file' className={styles.button}></input>      
</div>
</div>
<div className={styles.col}>
  <h2>{props.name}</h2>
  <h2>{props.year}</h2>
  
</div>

    </div>
  )
}
