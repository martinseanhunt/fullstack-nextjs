// Checking authentication against auth0 for protected pages
// To be used with getServerSideProps. I'd prefer to do this
// as a hoc but that's not possible with current version of next

// TODO: think of solution to extend this to be able to add other props if I find I need to use 
// getServerSideProps for anything else. 

import auth0 from '../lib/auth0'

const requireAuthentication = async ({ req, res }) => {
  const session = await auth0.getSession(req)
  
  if (!session || !session.user) {
    res.writeHead(302, { Location: '/' }).end()
    return { props: {} }
  }

  return { props: { user: session.user } }
}

export default requireAuthentication
