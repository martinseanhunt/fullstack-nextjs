import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  sub: { type: String, required: true, unique: true },
  given_name: { type: String },
  family_name: { type: String },
  nickname: { type: String },
  name: { type: String, required: true },
  picture: { type: String },
  created: { type: Date, default: Date.now },
  // TODO: This isn't right, should be updated_at to match 
  // whats coming back from auth 0, then we can check against it 
  // to see if we need to update the user :)
  updated: { type: Date, default: Date.now },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
