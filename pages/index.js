import Head from 'next/head'
import styled from 'styled-components'

import { useUserContext } from '../contexts/user/UserContext'

import Hero from '../components/layout/Hero'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// TODO: Rename hero
// TODO: Loading spinner

const Dashboard = ({ user }) => (
  <div>
    Hello {user.name} <a href="/api/logout">Logout</a>
  </div>
)

// TODO: I don't think there's even a need to chek the laoding state here... 
// instaed of rendering dahsboard we can just redirect if there's a user.sub

// Or we could keep the loading

// Or move it up a level and have it as a catch all.

// it shouldn't be rendered to the server since the server generates the static files based on first pass. (useffect won't hav ebeen run)

// next step is to hook up to mongo and cehck for / save user to the database so we can save progress.

const Home = () => {
  const { state: user } = useUserContext()

  return (
    <>
      <Head>
        <title>Fretboard Accellerator Companion - Home</title>
      </Head>

      {user.isFetching ? '...loading' : !user.sub ? <Hero /> : <Dashboard user={user} />}
    </>
  )
}

export default Home
