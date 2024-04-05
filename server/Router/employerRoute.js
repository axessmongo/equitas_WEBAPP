// employerRoutes.js

const express = require("express");
const router = express.Router();
const employerController = require("../module/EmployerControl");

router.post("/api/project", employerController.createProject);
router.get("/api/showproject",employerController.showingproject);
router.get("/api/userdetails", employerController.getUsersDetails);
router.post("/api/sendapprovalmail", employerController.sendApprovalMail);
// 
 router.put("/sendapprovalmail/:id", employerController.sendApprovalMail1)
 router.get("/api/get", employerController.Getmethods)
// 
router.get("/:id/verify/:token", employerController.verifyToken);    

module.exports = router;
