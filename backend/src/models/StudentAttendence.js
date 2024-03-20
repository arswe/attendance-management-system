const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
  timeLimit: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
})

const StudentAttendence = model('StudentAttendence', studentSchema)

module.exports = StudentAttendence
