const express = require('express');
const router = express.Router();
const ventorDetailrouter =require("../module/ventorcontrol.js")


router.post("/api/register",ventorDetailrouter.RegisterPostMethod);
router.post("/api/login", ventorDetailrouter.loginMethod);
//
router.post("/api/emailpassword", ventorDetailrouter.Emailpassword);
router.get("/:id/:token",ventorDetailrouter.ResetLink);
router.post("/:id/:token", ventorDetailrouter.Setnewpassword);


module.exports = router;
