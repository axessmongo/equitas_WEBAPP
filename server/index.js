const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
const mainRouter = require("./Router/route.js");

app.use(express.json());
app.use(cors());
app.use(mainRouter);

mongoose
  .connect(process.env.MONGODB_URL, {
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
