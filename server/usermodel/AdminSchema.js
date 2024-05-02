const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const blogSchema = new Schema({
   email:{
    type: [],
   }
});

const admins = mongoose.model("Admin", blogSchema); 

module.exports = admins;
