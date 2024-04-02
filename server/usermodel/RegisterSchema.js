const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  fullname: {
    type: String,
    required: true,
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
