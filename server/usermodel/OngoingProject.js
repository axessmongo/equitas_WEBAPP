const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const testSchema = new Schema({
  projectname: {
    type: String,
    required: true,
  },
  opentime: {
    type: String,
  },
  closetime: {
    type: String,

  },
  company:{
    type: String,
  },

  projectarea: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
});

// Create and export the model
const Project = mongoose.model("test", testSchema);

module.exports = test;
