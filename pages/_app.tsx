import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import * as amplitude from '@amplitude/analytics-browser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
  const router = useRouter()

  // Captures every url change including initial page load
  useEffect(() => {
    amplitude.track(`Viewed ${router.asPath}`)

    const handleRouteChange = (url: string) => {
      amplitude.track(`Viewed ${url}`)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
