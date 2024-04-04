// employerRoutes.js

const express = require("express");
const router = express.Router();
const employerController = require("../module/EmployerControl");

router.post("/api/project", employerController.createProject);
router.get("/api/userdetails", employerController.getUsersDetails);
router.post("/api/sendapprovalmail", employerController.sendApprovalMail);
router.get("/:id/verify/:token", employerController.verifyToken);

module.exports = router;
