const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  adminAttendence: {
    type: Schema.Types.ObjectId,
    ref: 'AdminAttendence',
    required: true,
  },
})

const AdminAttendence = model('AdminAttendence', adminSchema)

module.exports = AdminAttendence
