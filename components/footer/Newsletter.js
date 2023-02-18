import Link from "next/link"
import styles from "./styles.module.scss"
const Newsletter = () =>
{
  return (
    <div className={styles.footer__newsletter}>
      <h3>sign up for our newsletter</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.btn__primary}>SUBSCRIBE</button>
      </div>
      <p>By Clicking the SUBSCRIBE button ,you are agreeing to
        <Link href="/">Our Privacy & Cookie Policy</Link>
      </p>
    </div>
  )
}

export default Newsletter