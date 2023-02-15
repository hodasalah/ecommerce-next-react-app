import Link from "next/link"
import { FaOpencart } from "react-icons/fa"
import { RiSearch2Line } from "react-icons/ri"
import { useSelector } from "react-redux"
import logo from "../../public/images/hoda-shop-high-resolution-logo-color-on-transparent-background.png"
import styles from "./styles.module.scss"
const Main = () =>
{
  const { cart } = useSelector(state => ({ ...state }))
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
         <img src={logo.src} alt="hoda logo" />
        </Link>
        <div className={styles.search}>
          <input type="search" placeholder="search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" className={styles.cart} >
          <FaOpencart />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  )
}

export default Main