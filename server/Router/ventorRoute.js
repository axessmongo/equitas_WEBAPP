const express = require('express');
const router = express.Router();
const ventorDetailrouter =require("../module/ventorcontrol.js")


router.post("/api/register",ventorDetailrouter.RegisterPostMethod);


module.exports = router;
