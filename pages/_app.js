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
  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: 'SET_FETCHING' })
      const user = await fetchUser()
      dispatch({ type: 'SET_USER', payload: user })
    }
    
    // TODO: Could a user just use devtools to add a sub in to state
    // and spoof this? If so, need to find a better way to check authentication
    // ANSWER: 
    // TODO: Use this on pages that need authentication :)
    /*
      If you need to access the user's session from within an API route or a Server-rendered page you can use getSession. Note that this object will also contain the user's access_token and id_token.

      Profile.getInitialProps = async ({ req, res }) => {
        if (typeof window === 'undefined') {
          const session = await auth0.getSession(req);
          if (!session || !session.user) {
            res.writeHead(302, {
              Location: '/api/login'
            });
            res.end();
            return;
          }
          return { user: session.user };
        }
      };
    */
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
