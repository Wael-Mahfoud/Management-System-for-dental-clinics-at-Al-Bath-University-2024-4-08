import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { Links } from './data'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { Montserrat} from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], 
weight:['400','800','500','900']
 }
);

export default function Navbar(){
return(

<div className={styles.container} >
<div className={styles.logoContainer}>
<div className={montserrat.className}> 
<Link href="/" className={styles.logoName} >Dental Clinics<br/>   Website</Link>
</div>
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
<nav>
<ul className={styles.ul}>
<li>{
    Links.map(link => <Link
    key={link.id}
    href={link.url}
    className={styles.link}

    >{link.title}</Link>)
}</li></ul>
</nav>
</div>

</div>

)


}