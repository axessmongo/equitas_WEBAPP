const express = require('express');
const router = express.Router();
const ventorDetailrouter =require("../module/ventorcontrol.js")


router.post("/api/register",ventorDetailrouter.RegisterPostMethod);
router.post("/api/login", ventorDetailrouter.loginMethod);
// router.put("/api/bookmarkprojects/:id",ventorDetailrouter.Bookmarkprojects);
router.post("/api/intrestedprojects/:id", ventorDetailrouter.Bookmarkprojects)
router.post("/api/emailpassword", ventorDetailrouter.Emailpassword);
router.get("/api/singleuser/:id", ventorDetailrouter.getIdMethod);
router.post("/api/biddedvalues/:id", ventorDetailrouter.Bidvalue);
// router.get("/:id/:token",ventorDetailrouter.ResetLink);
//  router.post("/:id/:token", ventorDetailrouter.Setnewpassword);


module.exports = router;
