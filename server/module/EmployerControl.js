// employerController.js
const EmployerSchema = require("../usermodel/EmployerProject.js");
const RegisterSchema = require("../usermodel/RegisterSchema.js");
const TokenSchema = require("../usermodel/TokenSchema.js");
const crypto = require("crypto");
const ApprovedMailer = require("../utils/Approvedmailer.js");

const createProject = async (req, res) => {
  const {
    projectname,
    opentime,
    closetime,
    projectarea,
    description,
    company,
  } = req.body;

  try {
    const project = await EmployerSchema.create({
      projectname,
      opentime,
      closetime,
      projectarea,
      description,
      company,
    });

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

//ongoing project 


const showingproject = async (req, res,) => {
  try {
    const project = await EmployerSchema.find({})

    if(!project) {
      return(res.status(404).json({
        message: 'Project not found'
      }))
    }

    res.status(200).json({
      message: 'Project gets updated',
      data: project
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error getting data project",
    })
  }
}

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
  const { email } = req.body;

  try {
    const user = await RegisterSchema.findOne({ email, });

    if (!user) {
      console.error("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const existingToken = await TokenSchema.findOne({ userId: user._id });
    if (existingToken) {
      console.error("Token already exists for the user");
      return res
        .status(400)
        .json({ message: "Token already exists for the user" });
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


const sendApprovalMail1 = async (req, res) => {
  const id = req.params.id;
  const updateuser = req.body;

  try {
   
    const updatedUser = await RegisterSchema.findByIdAndUpdate(
      id,
      updateuser,
      { new: true }
    );

    // If user with provided id is not found, return 404
    if (!updatedUser) {
      return res.status(404).json({
        message: "Could not find user with id",
      });
    }

    // Send success response with updated user data
    res.status(200).json({
      message: 'Success',
      data: updatedUser, // corrected from 'object' to 'updatedUser'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating object by ID',
      error: error.message,
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
  showingproject,
  getUsersDetails,
  sendApprovalMail,
  sendApprovalMail1,
  verifyToken,
};
