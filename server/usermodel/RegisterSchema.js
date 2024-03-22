const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  fname: {
    type: "string",
  },
  lname: {
    type: "string",
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const Register = mongoose.model("Register", blogSchema);

module.exports = Register;