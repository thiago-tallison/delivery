import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} style={inter.className} />
      </Layout>
    </>
  )
}
