const express = require('express');
const router = express.Router();
const {
  RegisterPostMethod,
  loginpostmethod,
  forgetpassword,
  verfiedForgetPassword,
  setNewPassword,
} = require('../module/control');

router.post('/api/register', RegisterPostMethod);
router.post('/api/login', loginpostmethod);
router.post('/api/password-reset', forgetpassword);
router.get('/:id/:token', verfiedForgetPassword);
router.post('/:id/:token', setNewPassword);

module.exports = router;
