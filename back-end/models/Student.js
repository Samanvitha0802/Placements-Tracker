const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  branch: {
    type: String,
    required: true,
    trim: true
  },
  cgpa: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  }
});

module.exports = mongoose.model(
  "Student",
  studentSchema
);