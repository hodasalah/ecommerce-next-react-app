import Link from "next/link"
import { FaOpencart } from "react-icons/fa"
import { RiSearch2Line } from "react-icons/ri"
import { useSelector } from "react-redux"
import logo from "../../public/images/logo-icon.png"
import styles from "./styles.module.scss"
const Main = () =>
{
  const { cart } = useSelector(state => ({ ...state }))
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className="logo">
          <h1 style={{ color: "#e45354" }}><span style={{ color: "#112956" }}>e-</span>Shop</h1>
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