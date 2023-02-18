import { Inter } from '@next/font/google';
import Header from './../components/header/index';
import Footer from "../components/footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{
  return (
    <main>
      <Header />
      <Footer />
    </main>
  )
}
