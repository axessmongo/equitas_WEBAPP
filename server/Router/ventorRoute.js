const express = require('express');
const router = express.Router();
const ventorDetailrouter =require("../module/ventorcontrol.js")


router.post("/api/register",ventorDetailrouter.RegisterPostMethod);
router.post('/api/login', ventorDetailrouter.loginpostmethod);
router.post('/api/password',ventorDetailrouter.forgetpassword);
router.get('/:id/:token', ventorDetailrouter.verfiedForgetPassword);
router.post('/:id/:token', ventorDetailrouter.setNewPassword);


module.exports = router;
