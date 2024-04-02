const express = require('express');
const router = express.Router();
const {Registeruser} =require("../module/EmployerControl")

router.get("/api/get",Registeruser )


module.exports = router;
