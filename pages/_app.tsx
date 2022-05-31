import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import ReactDOM from 'react-dom/client'
import { useDispatch, useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { store } from '../store'
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // <SessionProvider session={session}>
    <Provider store={store}>
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </Provider>
  )
}

export default MyApp
