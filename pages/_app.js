import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Fretboard Accellerator Companion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
  </>
)


export default MyApp
