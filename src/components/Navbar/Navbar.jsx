import styles from "./Navbar.module.css"
import TailorIcon from "../TailorIcon/TailorIcon"
import ContactLink from "../ContactLink/ContactLink"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <TailorIcon />
      <ContactLink />
    </div>
  )
}

export default Navbar
