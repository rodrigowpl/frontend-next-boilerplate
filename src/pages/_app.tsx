import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Divisio - React NextJS Boilerplate</title>
        <link rel="shortcut icon" href="/icon/divisio-logo.svg" />
        <link rel="apple-touch-icon" href="/icon/divisio-logo.svg" />
        <meta
          name="description"
          content="A boilerplace app starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
