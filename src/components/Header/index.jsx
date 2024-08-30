import LogoNuKenzie from "../../assets/NuKenzieLogo.svg"
import styles from "./style.module.scss"

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <img src={LogoNuKenzie} alt="" />
    </header>
  )
}