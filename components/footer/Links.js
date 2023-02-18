import Link from "next/link";
import styles from "./styles.module.scss";

const links = [{
  heading: "e-Shop",
  links: [
    {
      name: "About us",
      link: ""
    }, {
      name: "Contact us",
      link: ""
    }, {
      name: "Social Responsibility",
      link: ""
    }, {
      name: "",
      link: ""
    }
  ]
}, {
  heading: "CUSTOMER SERVICE",
  links: [
    {
      name: "Shopping Info",
      link: ""
    },
    {
      name: "Returns",
      link: ""
    }, {
      name: "How To Order",
      link: ""
    }, {
      name: "How To Track",
      link: ""
    }, {
      name: "Size Guide",
      link: ""
    }
  ]
},
{
  heading: "HELP & SUPPORT",
  links: [

    {
      name: "Customer Service",
      link: ""
    }, {
      name: "Terms and Conditions",
      link: ""
    }, {
      name: "Consumers (Transactions)",
      link: ""
    }, {
      name: "Take our feedback Servey",
      link: ""

    }
  ]
}]
const Links = () =>
{
  return (
    <div className={styles.footer__links}>{
      links.map((link, i) => (
        <ul key={i}>
          {i === 0 ? (<Link href="/" className="logo">
            <h1 style={{ color: "#e45354" }}><span style={{ color: "#112956" }}>e-</span>Shop</h1>
          </Link>) : <b>{link.heading}</b>}
          {link.links.map((lnk, i) => (
            <li key={i}>
              <Link href={lnk.link}>{lnk.name}</Link>
            </li>
          ))}
        </ul>
      ))
    }</div>
  )
}

export default Links