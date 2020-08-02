import Head from 'next/head'

import auth0 from '../lib/auth0'

const Dashboard = ({ user }) => {
  return (
    <>
      <Head>
        <title>Fretboard Accellerator Companion - Dashboard</title>
      </Head>
      <ul>
        {Object.values(user).map(prop => <li key={user.sub}>{prop}</li>)}
      </ul>
      <a href="/api/logout">Logout</a>
    </>
  )
}

// Cehcking authentication agains auth0 for protected pages
// TODO: move cehcking auth to seperate reusable function
export const getServerSideProps = async ({ req, res }) => {
  const session = await auth0.getSession(req)
  
  if (!session || !session.user) {
    return res.writeHead(302, { Location: '/' }).end()
  }

  return { props: { user: session.user } }
}

export default Dashboard
