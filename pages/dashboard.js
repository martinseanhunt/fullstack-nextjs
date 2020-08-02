import Head from 'next/head'

import requireAuthentication from '../utils/requireAuthentication'

const Dashboard = ({ user }) => {
  return (
    <>
      <Head>
        <title>Fretboard Accellerator Companion - Dashboard</title>
      </Head>
      <ul>
        {Object.entries(user).map(([key, value]) => <li key={key}>{value}</li>)}
      </ul>
      <a href="/api/logout">Logout</a>
    </>
  )
}

export const getServerSideProps = requireAuthentication

export default Dashboard
