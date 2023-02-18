import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import styles from './styles.module.scss';

const Copyright = () =>
{
  return (
    <div className={styles.footer__copyright}>
      <section>copyright © 2023 <h6 style={{ color: "#e45354", fontSize: "14px", display: "inline-block" }}><span style={{ color: "#112956" }}>e-</span>Shop</h6> all rights reserved</section>
      <section>
        <ul>
          {data.map(link => (<li key={link.name}><Link href={link.link}>{link.name}</Link></li>))}
          <li>
            <a href="/">
              <IoLocationSharp /> Egypt
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
const data = [{
  name: "Privacy Center",
  link: ""
}, {
  name: "Privacy& Cookie Policy",
  link: ""
}, {
  name: "Manage Cookies",
  link: ""
}, {
  name: "Terms and Conditions",
  link: ""
}, {
  name: "Copyright Notice",
  link: ""
}]

export default Copyright