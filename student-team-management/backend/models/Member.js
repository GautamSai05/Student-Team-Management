const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  rollNumber: String,
  year: String,
  degree: String,
  aboutProject: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aim: String,
  image: String
});

module.exports = mongoose.model("Member", memberSchema);