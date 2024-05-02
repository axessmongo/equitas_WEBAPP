const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
require('dotenv').config();

const app = express(); 
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const mainRouter = require("./Router/ventorRoute.js");
const appRouter = require("./Router/employerRoute.js");

app.use(bodyParser.json()); // Use bodyParser middleware
app.use(express.json());
app.use(cors());
app.use(mainRouter);
app.use(appRouter);

app.get("/", (req, res) => {
  console.log('Request received at root path');
  res.send('Welcome to equitas bank');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

(async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with an error code
  }
})();
