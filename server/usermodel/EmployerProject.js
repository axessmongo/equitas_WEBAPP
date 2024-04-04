const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  openDate: {
    type: Date,
    default: Date.now,
  },
  closeDate: {
    type: Date,
    
  },
  projectArea: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
});

// Create and export the model
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
