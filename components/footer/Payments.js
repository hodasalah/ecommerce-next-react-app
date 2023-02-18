import mastercard from "../../public/images/payment/mastercard.png";
import paypal from "../../public/images/payment/paypal.png";
import visa from "../../public/images/payment/visa.png";
import styles from "./styles.module.scss";
const Payments = () =>
{
  return (
    <div className={styles.footer__payment}>
      <h3>Payments Methods</h3>
      <div className={styles.footer__flexWrap}>
        <img src={visa.src} alt="visa" />
        <img src={mastercard.src} alt="mastercard" />
        <img src={paypal.src} alt="paypal" />
      </div>
    </div>
  )
}

export default Payments