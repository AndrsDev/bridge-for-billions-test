import CollectionContextProvider from 'contexts/collectionContext'
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/global.scss'
import '../styles/text.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <CollectionContextProvider>
    <Component {...pageProps} />
    <div id="modal"></div>
  </CollectionContextProvider>
}

export default MyApp
