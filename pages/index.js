import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { fetchUser } from '../lib/user'

import FullPageBackground from '../components/layout/FullPageBackground'
import Content from '../components/index/Content'
import HeadLine from '../components/index/Headline'
import SubHeading from '../components/index/SubHeading'
import Logo from '../components/common/Logo'
import ButtonLink from '../components/common/ButtonLink'

// TODO BONUS: Add live activity stream!

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser()
      if(user) router.push('/dashboard')
    }
    
    getUser()
  }, [])
  
  return (
    <>
      <Head>
        <title>Fretboard Accellerator Companion - Home</title>
      </Head>

      <FullPageBackground>
        <Content>
          <Logo />
          <HeadLine>Master <br/>Your <span>Fretboard</span></HeadLine>
          <SubHeading>
            The <b>unofficial</b> companion app for the <b>Scotts bass lessons</b> course on unlocking the fretboard. 
            Track your progress and share with the community.
          </SubHeading>
          <ButtonLink href="/api/login">Signup / Login to Get Started</ButtonLink>
        </Content>
      </FullPageBackground>
    </>
  )
}

export default Home
