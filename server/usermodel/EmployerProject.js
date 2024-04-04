const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: {
    type: String,
   
  },
  projectOnTime: {
    type: String,
  },
  projectCloseTime: {
    type: String,
  },
  projectCompanyName: {
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

module.exports =Project