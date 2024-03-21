import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({

})


const Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog;