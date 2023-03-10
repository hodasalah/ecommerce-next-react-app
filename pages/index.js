import axios from "axios";
import Footer from "../components/footer";
import Header from './../components/header/index';
import { useSession, signIn, signOut } from "next-auth/react"



export default function Home({ country })
{
  // to connect next auth with react and get session data
  const {data:session}=useSession()
  console.log(session)
  //console.log(country)
  return (
    <main>
      <Header country={country} />
      <Footer country={country} />
    </main>
  )
}
export async function getServerSideProps()
{
  let data = await axios(`https://api.ipregistry.co/?key=${ process.env.IPREGISTRYKEY }
  `).then(res =>
  {
    return res.data.location.country
  }).catch(err =>
  {
    console.log(err)
  })
  //console.log(data)
  return {
    props: {
      country: data
    }
  }
}
