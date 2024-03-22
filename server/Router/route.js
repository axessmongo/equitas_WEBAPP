const express = require('express');
const router = express.Router();
const {
  RegisterPostMethod,
  loginpostmethod,
  forgetpassword,
  verfiedForgetPassword,
  setNewPassword,
} = require('../module/control');

router.post('/register', RegisterPostMethod);
router.post('/api/login', loginpostmethod);
router.post('/api/password', forgetpassword);
router.get('/:id/:token', verfiedForgetPassword);
router.post('/:id/:token', setNewPassword);

module.exports = router;
