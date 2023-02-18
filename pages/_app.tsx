import Navbar from '../components/navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className='bg-white min-h-screen'>
    <Navbar />
    <Component {...pageProps} />
  </div>)
}

export default MyApp
