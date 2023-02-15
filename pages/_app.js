import '@/styles/globals.scss'
// first step  after finish store configration
import Head from 'next/head'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from "../store"

// second step is create persistor
let persistor = persistStore(store)

export default function App({ Component, pageProps })
{
  //third step is to wrap our app in provider and persistGate
  return (
    <>
      <Head>
        <title>HODA_SHOP</title>
        <meta name="description" content="HODA_SHOP is an inline shopping app for all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}
//forth step close and create cartSlice in store folder