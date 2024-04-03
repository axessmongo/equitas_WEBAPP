const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  projectname: {
    type: "string",
    required: true,
  },
  opendate: {
    type: "date",
    required: true,
  },
  closeDate: {
    type: "date",
    required: true,
  },
  projectarea: {
    type: "string",
  },
  Description: {
    type: "string",
  },
});
const Register = mongoose.model("createprojectdetail", blogSchema);

module.exports = Register;
