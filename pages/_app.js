import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import UserContextProvider from '../contexts/user/UserContext'
import { useUserContext } from '../contexts/user/UserContext'
import { fetchUser } from '../lib/user'

import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

const Contexts = props => (
  <UserContextProvider>
    <MyApp {...props} />
  </UserContextProvider>
)

const MyApp = ({ Component, pageProps }) => {
  const { state: user, dispatch } = useUserContext()
  const { sub } = user

  // TODO: Move this to a useAuthenticate hook
  // TODO: do I still need to do this here with the getServerSIdeProps method ?
  // TODO: DO we even still need a user context ? 
  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: 'SET_FETCHING' })
      const user = await fetchUser()
      dispatch({ type: 'SET_USER', payload: user })
    }
    
    if(!sub) getUser()
  }, [sub])

  return (
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
}

export default Contexts
