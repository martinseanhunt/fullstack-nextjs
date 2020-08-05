import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import dbConnect from '../utils/dbConnect'
import User from '../models/user'

import FullPageBackground from '../components/layout/FullPageBackground'
import Content from '../components/index/Content'
import HeadLine from '../components/index/Headline'
import SubHeading from '../components/index/SubHeading'
import Logo from '../components/common/Logo'
import ButtonLink from '../components/common/ButtonLink'

// TODO: BONUS Add live activity stream!

// TODO: Poll for updates to user count (eventually activity stream)
// I'm using incremental static regeneration to get the existing activity stream
// poll for new updates client side to update as the user is on the page. 

const Home = ({ userCount }) => {
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('/api/me')
      if (res.ok) {
        const user = await res.json()
        if(user) router.push('/dashboard')
      }
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
            Track your progress and share with the {userCount} others in the community.
          </SubHeading>
          <ButtonLink href="/api/login">Signup / Login to Get Started</ButtonLink>
        </Content>
      </FullPageBackground>
    </>
  )
}

export async function getStaticProps() {
  await dbConnect()

  let userCount
  try {
    userCount = await User.countDocuments() 
  } catch (e) {
    console.error(e)
  }
  
  return {
    props: {
      userCount,
    },
    // Tells next to automatically re generate this static page 
    // for the next request Max every 1 second. This means we can 
    // use very frequently changing data but still not have to server 
    // render. This is very cool!
    revalidate: 1, 
  }
}

export default Home
