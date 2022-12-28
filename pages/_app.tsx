import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import * as amplitude from '@amplitude/analytics-browser'

if (process.env.NEXT_PUBLIC_AMP_KEY) {
  amplitude.init(process.env.NEXT_PUBLIC_AMP_KEY)
}

/*
let amplitudeClient = new AmplitudeClient()

amplitudeClient.init(`${process.env.NEXT_PUBLIC_AMP_KEY}`, undefined, {
  apiEndpoint: 'http://localhost/amplitude', // Replace the base portion with your site
})
*/

/*
amplitude.init(`${process.env.NEXT_PUBLIC_AMP_KEY}`, undefined, {
  apiEndpoint: 'http://localhost/amplitude' // Replace the base portion with your site
})
*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
