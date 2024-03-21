const equitas = require("../Module/RegisterControl.js");
const express = require("express");
const router = express.Router();


router.post("/api/register", equitas.RegisterPostMethod);
router.post("/api/login", equitas.loginpostmethod);
/////



module.exports = router;