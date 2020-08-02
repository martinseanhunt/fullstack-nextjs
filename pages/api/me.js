import auth0 from '../../lib/auth0'
import dbConnect from '../../utils/dbConnect'
import User from '../../models/user'

const me = async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        await auth0.handleProfile(req, res)
      } catch (error) {
        console.error(error)
        res.status(error.status || 500).end(error.message)
      }
      break
    
    // TODO: Would it make more sense to do this in handleCallback
    // using onUserLoaded... probably
    case 'POST':
      await dbConnect()
      const user = req.body
      
      try {
        const existingUser = await User.findOne({ sub: user.sub })

        if(existingUser) {
          // TODO: Only run this if there has been an update
          Object.assign(existingUser, {
            ...user,
            updated: Date.now()
          })
          await existingUser.save()
        } else {
          await User.create(user)
        }
        
        res.status(200).json({ success: true })
      } catch (error) {
        console.error(error)
        res.status(error.status || 500).end(error.message)
      }
      break

      default:
        res.status(400).json({ success: false })
  }
  
}

export default auth0.requireAuthentication((me))
