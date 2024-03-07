import React from "react"
import Link from "next/link"
import styles from "../styles/footer.module.css"
import Image from "next/image"

export default function Footer(){
    return (
        <div className={styles.footer}>
            <h3>Orgulhosamente feito com  
               <Link href="https://ead.ifms.edu.br/">     
                  <Image
                    width={100}
                    height={70} 
                    src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}
                  />
               </Link>
            </h3>
        </div>
    )
}