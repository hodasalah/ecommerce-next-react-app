import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
import profile from "../../public/images/profile.jpeg"
import styles from "./styles.module.scss"

const UserMenu = ({ session }) =>
{
  return (
    <div className={styles.menu}>
      <h4>Welcome to Hoda-Shop</h4>
      {session ? <div className={styles.flex}>
        <img src={session.user.image ? session.user.image : profile.src} alt={"hoda salah"} className={styles.menu__img} />
        <div className={styles.col}>
          <span>Welcome Back,</span>
          <h3>{session.user.name}</h3>
          <span onClick={() => signOut()}>Sign out</span>
        </div>
      </div> : <div className={styles.flex}>
        <button className={styles.btn__primary}>Sign Up</button>
        <button onClick={() => signIn()} className={styles.btn__outlined}>Login</button>
      </div>
      }
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Messages</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>

      </ul>
    </div >
  )
}

export default UserMenu