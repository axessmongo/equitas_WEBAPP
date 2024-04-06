 const express = require('express');
const router = express.Router();
const EmployerRouter =require("../module/EmployerControl.js");

router.post("/api/project",EmployerRouter.Createproject)
router.get("/api/userdetails",EmployerRouter.GettinguserDetails)
router.get("/api/project", EmployerRouter.showProject)
router.put("/api/mailapproval/:id",EmployerRouter.sendApprovalMail)




module.exports = router