const express = require("express");
const router = express.Router();
const EmployerRouter = require("../module/EmployerControl.js");
const CountRouter =require("../module/Count.js")
const AdminRouter = require("../module/AdminControl.js");

router.post("/api/project", EmployerRouter.Createproject);
router.get("/api/userdetails", EmployerRouter.GettinguserDetails);
router.get("/api/showprojects", EmployerRouter.showProject);
router.put("/api/mailapproval/:id", EmployerRouter.sendApprovalMail);
//admin routes for admin
router.post("/api/admin", AdminRouter.Createadmin);
router.get("/api/getadmin", AdminRouter.GettingAdmin);

//counter routes for admin 
router.post("/api/count" , CountRouter.countMethod);

module.exports = router;
