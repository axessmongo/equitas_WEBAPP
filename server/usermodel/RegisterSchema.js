const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
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
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const Register = mongoose.model("Register", blogSchema);

module.exports = Register;
