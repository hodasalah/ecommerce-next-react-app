import styles from "./styles.module.scss"

const Ad = () =>
{
  return (
    <div className={styles.ad}>
      <h2 className={styles.ad__content}><span>READY-TO-USE COUPONS</span> SAVE $200 BONOUS COUPON</h2>
      <button className={styles.ad__btn}>shop now</button>
    </div>
  )
}

export default Ad