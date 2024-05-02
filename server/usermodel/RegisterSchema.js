// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const blogSchema = new Schema({
  fullname: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  company: String,
  address: String,
  city: String,
  state: String,
  pin: String,
  pan: String,
  ifsccode: String,
  accountnum: String,
  gst: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  intestedprojects: {
    type: [],
  },

  biddedprojects: {
    type: {},
  },

  verified: {
    type: Boolean,
    default: false,
  },
});

// Create a model
const Register = mongoose.model("Register", blogSchema);

module.exports = Register;
