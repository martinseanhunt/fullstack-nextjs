import Head from 'next/head'

import requireAuthentication from '../utils/requireAuthentication'

const Dashboard = ({ user }) => {
  return (
    <>
      <Head>
        <title>Fretboard Accellerator Companion - Dashboard</title>
      </Head>
      <div>Welcome {user.given_name || user.name}</div>
      <a href="/api/logout">Logout</a>
    </>
  )
}

export const getServerSideProps = requireAuthentication

export default Dashboard
