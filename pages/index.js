import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

import { useUserContext } from '../contexts/user/UserContext'

import FullPageBackground from '../components/layout/FullPageBackground'
import Logo from '../components/Logo'
import ButtonLink from '../components/ButtonLink'

// TODO: Mobile styling

const Home = () => {
  const router = useRouter()
  const { state: user } = useUserContext()
  
  useEffect(() => {
    if(user.sub) router.push('/dashboard')
  }, [user.sub])

  return (
    <>
      <Head>
        <title>Fretboard Accellerator Companion - Home</title>
      </Head>

      <FullPageBackground>
          <Logo />
          <HeadLine>Master <br/>Your <span>Fretboard</span></HeadLine>
          <SubHeading>
            The <b>unofficial</b> companion app for the <b>Scotts bass lessons</b> course on unlocking the fretboard. 
            Track your progress and share with the community.
          </SubHeading>
          <ButtonLink href="/api/login">Signup / Login to Get Started</ButtonLink>
      </FullPageBackground>
    </>
  )
}

// TODO: pull out sizes etc in to theme
const HeadLine = styled.h1`
  font-size: 14.0rem;
  letter-spacing: -.5rem;
  line-height: 0.8em;
  font-weight: 900;
  text-transform: uppercase;

  span {
    display: block; 
    color: #FDF04E;
  }
`
// TODO: get values from theme
const SubHeading = styled.p`
  font-size: 2.4rem;
  color: #fff;
  font-weight: 400;
  max-width: 750px;
`

export default Home
