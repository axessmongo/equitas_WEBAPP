const RegisterEmployer =require("../module/EmployerControl");
const express = require('express');
const router = express.Router();

router.get("/api/get",RegisterEmployer.Registeruser);