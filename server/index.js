const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 6000;
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const fileUpload = require("express-fileupload");
const swaggerJSDocs = YAML.load('./api.yaml');
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
app.use(fileUpload());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

mongoose
  .connect("mongodb+srv://axessmongo:admin@cluster0.ozjlhdj.mongodb.net/equitas?retryWrites=true&w=majority", {
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
