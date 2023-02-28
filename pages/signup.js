import CircledIconButton from "@/components/buttons/circledIconButton"
import { Form, Formik } from "formik"
import Link from "next/link"
import { useState } from 'react'
import * as Yup from "yup"
import YupPassword from 'yup-password'
import Footer from "../components/footer"
import Header from "../components/header"
import styles from "../styles/Signin.module.scss"
import LoginInput from './../components/inputs/loginInput/index'

const initialValues = {
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
}
const signup = () =>
{
  const [user, setUser] = useState(initialValues);
  const { full_name, email, password, confirm_password } = user
  YupPassword(Yup)
  const handleChange = (e) =>
  {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const signUpValidation = Yup.object({
    full_name: Yup.string().required("Please Enter your name").min(2, "Your name must be between 2 to 20 characters").max(20, "Your name must be between 2 to 20 characters").matches(/^[aA-zZ]/, "Numbers and Special Characters are not allowed"),
    email: Yup.string().required("Email Address is required").email("Please enter a valid email address"),
    password: Yup.string().password().required("Password is required").min(
      8,
      'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
    ).max(30, "Max-length is 30").minLowercase(1, 'password must contain at least 1 lower case letter').minUppercase(1, 'password must contain at least 1 upper case letter').minNumbers(1, 'password must contain at least 1 number').minSymbols(1, 'password must contain at least 1 special character'),
    confirm_password: Yup.string().required("Confirm Your Password").oneOf([Yup.ref("password")], "passwords must match")
  })
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>

          <div className={`${ styles.login__form }`}>
            <div className="logo">
              <h1>Sign <span>up</span> </h1>
            </div>
            <p>Welcome To one of the best online e-shopping service</p>
            <Formik
              enableReinitialize
              initialValues={{
                full_name, email, password, confirm_password
              }}
              validationSchema={signUpValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput icon="user" type="text" placeholder="Type your name" name="full_name" onChange={handleChange} />
                  <LoginInput icon="email" type="email" placeholder="Type your email" name="email" onChange={handleChange} />
                  <LoginInput icon="password" type="password" placeholder="Type your password" name="password" onChange={handleChange} />
                  <LoginInput icon="password" type="password" placeholder="ReType your password" name="confirm_password" onChange={handleChange} />
                  <CircledIconButton type="submit" text="Sign up" />
                  <div className={styles.forget}>
                    <Link href="/forget">Forget Your Password ?</Link>
                    <Link href="/signup">You are  a user ? Sign in</Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default signup;