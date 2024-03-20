const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
  timeLimit: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const StudentAttendence = model('StudentAttendence', studentSchema)

module.exports = StudentAttendence
