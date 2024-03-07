import styles from "./styles/notfound.module.css"
import Menu from "./componentes/Menu"
import Footer from "./componentes/Footer"
import layout from  "./layout"
import Image from "next/image"

export default function NotFound(){
    return(
        <div className={styles.not}>
            <h1>
                Infelizmente não encontramos a página que voce está procurando...
            </h1>

            <h2>
                <Image
                    width={200}
                    height={200} 
                    src={"https://usagif.com/wp-content/uploads/gifs/sad-cat-60.gif"}
                />
            </h2>
        </div>
    );
}