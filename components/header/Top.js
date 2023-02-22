import Link from "next/link"
import { useState } from "react"
import { BsSuitHeart } from "react-icons/bs"
import { MdSecurity } from "react-icons/md"
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri"
import profile from "../../public/images/profile.jpeg"

import { useSession } from 'next-auth/react'
import UserMenu from "./UserMenu"
import styles from "./styles.module.scss"

const Top = ({ country }) =>
{
  const [visible, setVisible] = useState(false)
  const { data: session } = useSession()
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country?.flag?.emojitwo} alt="flag" />
            <span>{country?.name}/ usd </span>
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
            {session ? <div >
              <div className={styles.flex}>
                <img src={session.user.image ? session.user.image : profile.src} alt={"hoda salah"} />
                <span>{session.user.name}</span>
                <RiArrowDropDownFill />
              </div>
            </div> : <div>
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </div>}
            {visible && <UserMenu session={session} />}
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Top