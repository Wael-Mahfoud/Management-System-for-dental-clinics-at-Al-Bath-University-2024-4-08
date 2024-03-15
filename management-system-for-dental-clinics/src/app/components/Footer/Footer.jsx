import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import { social_media } from './data'
export default function Footer(){
return(

<div className={styles.container} >
    <div>© Dental Clinics Website .All rights reserved.  </div>
    <div className={styles.social}>
        {
            social_media.map(media =><Image
            key={media.id}
                src={`/images/icons/${media.name}.png`}
                width={20}
                height={20}
                className={styles.icon}
                alt={`Hexashop ${media.name} link`}
                />
             )
        }
    
   </div>

</div>


)


}