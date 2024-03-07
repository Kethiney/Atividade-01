import React from "react"
import styles from "../styles/map.module.css"

export default function Map(){
  return (
    <h3 className={styles.map}>
      <iframe
        id="gmap_canvas"
        src={"https://maps.google.com/maps?q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
        width={1000}
        height={400}
        frameborder="0" scrolling="no"
        marginheight="0"
        marginwidth="0">
      </iframe>
    </h3>
  )
}