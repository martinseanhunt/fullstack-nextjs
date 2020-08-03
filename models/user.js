import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  sub: { type: String, required: true, unique: true },
  given_name: { type: String },
  family_name: { type: String },
  nickname: { type: String },
  name: { type: String, required: true },
  picture: { type: String },
  created: { type: Date, default: Date.now },
  updated_at: { type: Date }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
