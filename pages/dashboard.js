import Head from 'next/head'

import { useUserContext } from '../contexts/user/UserContext'

// TODO: Check auth for REAL and redirect to login if no user. could I use a useRequireAuth hook?
// or reusable funciton? 
const Dashboard = () => {
  const { state: user } = useUserContext()

  // If we're on this page and we've passed authentication then 
  // we still have to wait for the user profile to start fetching
  // so that's a loading state also.
  
  // TODO: revisit this to see if we can just use isFetching after
  // I've hooked up the required authentication
  const loading = user.isFetching || !user.sub

  // TODO: Proper loading component / UI
  return loading ? '...loading' : (
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

export default Dashboard
