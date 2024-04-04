const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  projectname: {
    type: "string",
  },
  opendate: {
    type: date,
  },
  closedate: {
    type: date,
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
