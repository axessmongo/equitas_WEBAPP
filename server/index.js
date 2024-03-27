const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT; // Default to port 3000 if PORT is not set in environment
const MONGODB_URL = process.env.MONGODB_URL;

const app = express();
const mainRouter = require("./Router/route.js");

app.use(express.json());
app.use(cors());
app.use(mainRouter);

app.get("/", (req, res) => {
  console.log('Request received at root path');
  res.send('Welcome to equitas bank');
});

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with an error code
  });
