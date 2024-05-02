const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const blogSchema = new Schema({
   visit:{
    type: Number,
   }
});

const visit = mongoose.model("visit", blogSchema); 

module.exports = visit;
