import React from "react"
import Link from "next/link"
import styles from "../styles/menu.module.css"
import Image from "next/image"

export default function Menu(){
  return (
    <header>
      <nav className={styles.cabecalho}>
        <h4>
          <Image src="/images/logo.png"
            width={60}
            height={80}
            alt="Logo" />
        </h4>
          <navbar>  
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>

              <Link href="/registro">
                <li>Registrar</li>
              </Link>

              <Link href="/registro">
                <li>Quem Somos</li>
              </Link> 

              <Link href="/localizacao">
                <li>Contato</li>
              </Link>                     
            </ul>
          </navbar>
      </nav>
    </header>
  )
}