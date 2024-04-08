const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const projectSchema = new Schema({

  projectname: {
    type: String,
  },
  opentime: {
    type: String,
  },
  closetime: {
    type: String,

  },
  company: {
    type: String,
  },
    
  projectarea: {
    type: String,
   
  },
  description: {
    type: String,
  },

  biddedperson: {
    type:[]
  }
});

// Create and export the model
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
