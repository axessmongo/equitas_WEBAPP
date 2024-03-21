const equitas = require("../Module/RegisterControl.js");
const express = require("express");
const router = express.Router();


router.post("/api/register", equitas.RegisterPostMethod);
router.post("/api/login", equitas.loginpostmethod);
//-forget-password:
router.post("/api/password-reset", equitas.forgetpassword);



module.exports = router;