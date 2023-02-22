import { Form, Formik } from "formik"
import Link from "next/link"
import { BiLeftArrowAlt } from "react-icons/bi"
import Footer from "../components/footer"
import Header from "../components/header"
import styles from "../styles/Signin.module.scss"

const signin = () =>
{
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <h3>Happy to see You again Welcome Back to <Link href="/">our store</Link></h3>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in </h1>
            <p>Welcome To one of the best online Eshopping service</p>
            <Formik>
              {(form) => (
                <Form>
                  <input type="text" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default signin