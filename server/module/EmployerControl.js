// employerController.js

const EmployerSchema = require("../usermodel/EmployerProject.js");
const RegisterSchema = require("../usermodel/RegisterSchema.js");
const TokenSchema = require("../usermodel/TokenSchema.js");
const crypto = require("crypto");
const ApprovedMailer = require("../utils/Approvedmailer.js");

const createProject = async (req, res) => {
  const { projectname, opendate, closedate, projectarea, description } = req.body;

  try {
    const project = await EmployerSchema.create({
      projectname,
      opendate,
      closedate,
      projectarea,
      description,
    });

    if (!project) {
      return res.status(400).json({
        message: "Project not created",
      });
    }

    res.status(200).json({
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating project",
    });
  }
};

const getUsersDetails = async (req, res) => {
  try {
    const users = await RegisterSchema.find({});

    if (!users) {
      return res.status(404).json({
        message: "User details not found",
      });
    }

    res.status(200).json({
      message: "User details retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error retrieving user details",
    });
  }
};

const sendApprovalMail = async (req, res) => {
  const { email, user_id } = req.body;

  try {
    const user = await RegisterSchema.findOne({ email });

     if (!user) {
       console.error("User not found");
     return res.status(404).json({ message: "User not found" });
    }

    const existingToken = await TokenSchema.findOne({ userId: user._id });
    if (existingToken) {
      console.error("Token already exists for the user");
      return res.status(400).json({ message: "Token already exists for the user" });
    }

    const tokenValue = crypto.randomBytes(36).toString("hex");
    const newToken = new TokenSchema({
      userId: user._id,
      token: tokenValue,
    });
    await newToken.save();

    const verificationUrl = `/verify/${user._id}/${tokenValue}`;
    await ApprovedMailer.sendVerificationEmail(user.email, verificationUrl);

    return res.status(200).json({
      message: "Verification email sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error sending approval email",
    });
  }
};


const verifyToken = async (req, res) => {
  try {
    const user = await RegisterSchema.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await TokenSchema.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await user.updateOne({ _id: user._id }, { verified: true });

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Invalid token",
    });
  }
};

module.exports = {
  createProject,
  getUsersDetails,
  sendApprovalMail,
  verifyToken,
};
