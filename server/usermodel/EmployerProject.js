const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectOnTime: {
    type: Date,
    default: Date.now,
  },
  projectCloseTime: {
    type: Date,
    
  },

  projectCompanyName:{
    type: String,
  },
  
  projectArea: {
    type: String,
    
  },
  projectDescription: {
    type: String,
    
  },
});

// Create and export the model
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
