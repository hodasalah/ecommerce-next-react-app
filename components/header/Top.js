import Link from "next/link"
import { useState } from "react"
import { BsSuitHeart } from "react-icons/bs"
import { MdSecurity } from "react-icons/md"
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri"
import flag from "../../public/images/egyptFlag.png"
import profile from "../../public/images/profile.jpeg"

import styles from "./styles.module.scss"
import UserMenu from "./UserMenu"

const Top = () =>
{
  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={flag.src} alt="egypt flag" />
            <span>Egypt / usd</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Services</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>

          </li>
          <li className={styles.li} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {loggedIn ? <li >
              <div className={styles.flex}>
                <img src={profile.src} alt={"hoda salah"} />
                <span>Hoda Salah</span>
                <RiArrowDropDownFill />
              </div>
            </li> : <li>
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </li>}
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Top