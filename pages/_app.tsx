import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/global.scss'
import '../styles/text.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
