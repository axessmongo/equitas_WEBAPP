// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
require('dotenv').config();

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
  verified: {
    type: Boolean,
    default: false,
  },
});

// Define method to generate authentication token
blogSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

// Create a model
const Register = mongoose.model("Register", blogSchema);


module.exports = Register;

