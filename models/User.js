const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  username: { type: String },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: String,
  address: String,
  agency: String,
  startDate: Date,
  phoneNumber: String,
  gender: String,
  availability: false,
  birthday: Date,
  projects: [
    {
      name: String,
      description: String,
      technology: String,
      site: String,
      size: String,
      startDate: Date,
      endDate: Date,

      status: String,
      progress: String
    }
  ],
  formations: [
    {
      name: String,
      Type: String,
      Site: String,
      EndDate: Date,
      Rank: String,
      startDate: Date,
      Formateur: String
    }
  ],
  role: [
    {
      type: String,
      experience: String
    }
  ],
  skills: [
    {
      name: String,
      value: Number
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
