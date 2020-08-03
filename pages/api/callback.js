import auth0 from '../../lib/auth0'
import dbConnect from '../../utils/dbConnect'
import User from '../../models/user'

const callback = async (req, res) => {
  try {
    await auth0.handleCallback(req, res, { 
      redirectTo: '/dashboard',
      onUserLoaded: (req, res, session) => {
        // Persist user information to our database
        // No need to await as it can happen in the background
        saveOrUpdateUser(session.user)
        return session
      }
    })
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}

const saveOrUpdateUser = async user => {
  await dbConnect()
  try {
    await User.update({sub: user.sub}, user, { upsert: true, setDefaultsOnInsert: true })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

export default callback
