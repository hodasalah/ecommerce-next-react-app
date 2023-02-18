import Copyright from "./Copyright";
import Links from "./Links";
import Newsletter from "./Newsletter";
import Payments from "./Payments";
import Socials from "./Socials";
import styles from "./styles.module.scss";
const Footer = () =>
{
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <Newsletter />
        <Payments />
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer