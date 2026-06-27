import CircledIconButton from "@/components/buttons/circledIconButton"
import { Form, Formik } from "formik"
import { getProviders, signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from 'react'
import { useRouter } from "next/router"
import { BiLeftArrowAlt } from "react-icons/bi"
import * as Yup from "yup"

import Footer from "../components/footer"
import Header from "../components/header"
import styles from "../styles/Signin.module.scss"
import LoginInput from './../components/inputs/loginInput/index'

const initialValues = {
  login_email: "",
  login_password: ""
}
const SignIn = ({ providers }) =>
{
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user
  const socialsProviders = Object.values(providers)
  const handleChange = (e) =>
  {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  console.log(user)
  const loginValidation = Yup.object({
    login_email: Yup.string().required("Email Address is required").email("Please enter a valid email address"),
    login_password: Yup.string("").required("Password is required")
  })
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <p>Happy to see You again Welcome Back to <Link href="/">our store</Link></p>
          </div>
          <div className={`${ styles.login__form }`}>
            <div className="logo">
              <h1>Sign <span>in</span> </h1>
            </div>
            <p>Welcome To one of the best online e-shopping service</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email, login_password
              }}
              validationSchema={loginValidation}
              onSubmit={async () => {
                setLoading(true)
                setError("")
                const res = await signIn("credentials", {
                  redirect: false,
                  email: login_email,
                  password: login_password,
                })
                setLoading(false)
                if (res.error) {
                  setError(res.error)
                } else {
                  setError("")
                  router.push("/")
                }
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput icon="email" type="email" placeholder="Type your email" name="login_email" onChange={handleChange} />
                  <LoginInput icon="password" type="password" placeholder="Type your password" name="login_password" onChange={handleChange} />
                  <CircledIconButton type="submit" text={loading ? "Signing in..." : "Sign in"} />
                  {error && <span className={styles.login__error}>{error}</span>}
                  <div className={styles.forget}>
                    <Link href="/forget">Forget Your Password ?</Link>
                    <Link href="/signup">Not a user ? Sign up</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {socialsProviders.map((provider) =>
                {
                  let providerName = provider.id
                  if (providerName === "credentials") return null;
                  return (
                    <div key={provider.name}>
                      <button className={`${ styles.social__btn }`} onClick={() => signIn(providerName)}>
                        <img src={`../../images/socials/${ providerName }.png`} alt={provider.name} />
                        Sign in with {provider.name}
                      </button>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default SignIn
export async function getServerSideProps(context)
{
  const providers = await getProviders()
  console.log(providers)
  return {
    props: {
      providers: providers
    }
  }
}