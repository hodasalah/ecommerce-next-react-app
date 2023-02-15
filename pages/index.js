import { Inter } from '@next/font/google';
import Header from './../components/header/index';

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{
  return (
    <main>
      <Header />
    </main>
  )
}
