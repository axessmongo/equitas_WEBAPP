const express = require('express');
const router = express.Router();
const {
  RegisterPostMethod,
  loginpostmethod,
  forgetpassword,
  verfiedForgetPassword,
  setNewPassword,

} = require('../module/ventorcontrol');

const {Registeruser} =require("../module/EmployerControl")



router.post('/api/register', RegisterPostMethod);
router.post('/api/login', loginpostmethod);
router.post('/api/password', forgetpassword);
router.get('/:id/:token', verfiedForgetPassword);
router.post('/:id/:token', setNewPassword);
//EMployer
router.get("/api/get",Registeruser )


module.exports = router;
