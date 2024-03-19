import Image from 'next/image'
import styles from './studentNav.module.css'
import Link from 'next/link'
import { Links } from './data'
import DarkModeToggle from '@/app/components/DarkModeToggle/DarkModeToggle';
export default function StudentNav(){
return(

<div className={styles.container} >
<div className={styles.logoContainer}>
<Link href="/" className={styles.logoName} >Dental Clinics<br/>   Website</Link>
<Image
className={styles.logo}
src="/images/Al-baath logo.jpg"
alt='Al-Baath Logo'
width={50}
height={50}
/>
</div>
<div className={styles.links}>
<DarkModeToggle/>

{
    Links.map(link => <Link
    key={link.id}
    href={link.url}
    className={styles.link}

    >{link.title}</Link>)
}
<Link href="/"> <button className={styles.button}>Logout</button> </Link>

</div>

</div>

)


}