import styles from "./styles.module.scss"
import Link from "next/link"
import {FaFacebookF,FaTiktok} from "react-icons/fa"
import {BsInstagram,BsYoutube,BsPinterest,BsSnapchat,BsTwitter} from "react-icons/bs"

const Socials = () => {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>Get In Touch</h3>
        <ul>
          <li>
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
            </li>
            <li> 
            <a href="/" target="_blank">
              <BsInstagram />
            </a>
            </li>
            <li>
            <a href="/" target="_blank">
              <BsTwitter />
            </a>
            </li>
            <li>
            <a href="/" target="_blank">
              <BsYoutube />
            </a>
            </li>
            <li>

            <a href="/" target="_blank">
              <BsPinterest />
            </a>
            </li>
            <li>
            <a href="/" target="_blank">
              <BsSnapchat />
            </a>
            </li>
            <li>
            <a href="/" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Socials