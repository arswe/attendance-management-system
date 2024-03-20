const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, required: true }],
  accountStatus: { type: String, required: true },
})

const User = model('User', userSchema)

module.exports = User
