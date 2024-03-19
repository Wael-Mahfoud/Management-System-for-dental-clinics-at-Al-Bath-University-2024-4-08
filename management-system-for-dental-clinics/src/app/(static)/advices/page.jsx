import Image from 'next/image'
import styles from './page.module.css'
import {image} from './data'
export default function Advices (){

return(
    <div className={styles.container}> 
  
    <h1 className={styles.title} style={{marginTop:'40px'}}>9 TIPS TO KEEP YOUR TEETH HEALTHY :</h1>
  
    <div className={styles.imagecontainer}>
    {
    image.map( img => <Image key={img.id} src={`/images/${img.name}`} width={250}   height={250}  alt='advices' className={styles.image}/>)
    }  
    </div>
  
    <p>Dental hygiene cannot be undermined and is necessary to maintain healthy teeth and gums. Without proper care, tooth decay and gum problems, various complications might arise, which may ultimately lead to pain, speech problems, and decreased self-confidence. In fact, experts believe that dental health concerns contribute to global health burden and need to be attended to accordingly.</p>
     
    <ol className={styles.container}>
        Maintaining dental hygiene and keeping your teeth healthy is very much achievable through considering the tips below: 
        
        <li className={styles.li}>Brush regularly to maintain proper dental hygiene
                                 Brushing your teeth daily is one of the most essential tips to maintain good oral hygiene and healthy teeth. Brushing your teeth helps remove plaque and bacteria. </li>
        
        <p>Make sure you brush your teeth twice a day but do not do so aggressively! Brushing too hard may hurt your tooth enamel and your gums. Consider using toothbrushes that have soft bristles. </p>
        
        <li className={styles.li}>Clean your tongue, too, for proper dental hygiene</li>
        
        <p>As you brush your teeth, do not neglect your tongue because plaque also builds up there.³ There are different ways you can do that. You can use a tongue scraper, a spoon, or even the back of your toothbrush if it has a scraping edge.</p>
        
        <li className={styles.li}> Evaluate whether you need to use fluoride-based products to maintain proper dental hygiene</li>
        
        <p>Fluoride helps prevent cavities, and lack of fluoride might lead to tooth decay. Fluoride basically fights germs and provides a protective barrier to your teeth. Brushing your teeth twice daily with a fluoride-based tooth paste will help promote your oral hygiene and keep your teeth healthy.⁴

        Check with your dentist on whether you would need to purchase a fluoride-based mouthwash, or explore other options depending on what your dental concerns are.</p>
        
        <li className={styles.li}> Floss once a day to maintain proper dental hygiene</li>
        
        <p>Flossing removes plaque and bacteria between the teeth, a place where the toothbrush cannot reach. Flossing is as important as brushing as it also removes food crumbs stuck within the teeth, stimulating the gum and lowering inflammation.</p>
        
        <li className={styles.li}> Use mouthwash to maintain proper dental hygiene</li>
        
        <p>Flossing removes plaque and bacteria between the teeth, a place where the toothbrush cannot reach. Flossing is as important as brushing as it also removes food crumbs stuck within the teeth, stimulating the gum and lowering inflammation.</p>
        
        <li className={styles.li}>Watch what you eat to maintain proper dental hygiene</li>
        
        <p>Your diet contributes to your oral hygiene and helps you keep your teeth healthy. Make sure your diet is balanced with plenty of vegetables and fruits, starchy foods, and proteins, but limit your intake of food that are high in fat and sugar</p>
        
        <li className={styles.li}>Watch what you drink, too! </li>
        
        <p>Sugary drinks are bound to harm your teeth. Beverages that are high in sugar can lead to tooth decay. They might also contain high levels of acid, leading to tooth erosion.</p>
        
        <li className={styles.li}>Stay away from those cigarettes or any colored food for a proper dental hygiene</li>
        
        <p>Smoking also affects your dental hygiene. According to the Center for Disease Control and Prevention, smoking causes gum disease as bacteria on the teeth gets under the gum, and it also leads to increased levels of plaque and tartar if the germs stay on the teeth for too long.⁸

        Colored food, just like smoking, also impacts the color of your teeth, making them look and feel unhealthy and unrefreshed</p>
        
        <li className={styles.li}>See a dentist regularly to maintain proper dental hygiene</li>
        
        <p>Don’t miss your regular check-ups at the dentists to maintain your oral hygiene and to seek professional input and advice. A dentist is able to assess and diagnose any concern that needs early intervention before it becomes severe. Also, your dentists can remove any hardened tartar on plaque through deep cleaning the teeth.</p>
    </ol>
    
    <h1 className={styles.title}>How to best clean your teeth and gums to promote dental hygiene?</h1>

    <ol>
       <li className={styles.li}>Brush:</li>
       <p>Use a soft-bristle toothbrush and a fluoride-based toothpaste to brush your teeth gently in a circular motion.⁹ Be gentle around the gum line. Don’t forget your tongue; you can use a tongue scraper to clean your tongue or lightly brush it. This process should take you about 2-3 minutes.</p>
       <li className={styles.li}>Floss:</li>
       <p>Gently push the floss down to the gum-line. Hug the side of your tooth with floss then move the floss up and down. Do not snap the floss.</p>
       <li className={styles.li}>Use mouthwash:</li>
       <p>Determine the right amount of mouthwash to be used, empty the mouthwash into the mouth, rinse teeth with mouthwash vigorously, gargle for at least 30 seconds, and spit out. Always check the instructions posted on the label by the manufacturer to determine how to use mouthwash.</p>
    </ol>

    <p style={{marginBottom:'60px'}}>Finally, do not delay those dental check-ups you have scheduled. Proper dental hygiene with regular professional follow-ups are your only way to avoid tooth decay and gum problems and maintain the freshness you seek! </p>
    </div>
)

}