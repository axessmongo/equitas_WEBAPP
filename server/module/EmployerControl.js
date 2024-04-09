const RegisterSchema = require("../usermodel/RegisterSchema");
const EmployerSchema = require("../usermodel/EmployerProject.js");
const TokenSchema = require("../usermodel/TokenSchema.js");
const crypto = require("crypto");
const ApprovedMailer = require("../utils/Approvedmailer.js");

const Createproject = async (req, res) => {
  const {
    projectname,
    opentime,
    closetime,
    company,
    projectarea,
    description,
  } = req.body;

  try {
    const project = await EmployerSchema.create({
      projectname,
      opentime,
      closetime,
      company,
      projectarea,
      description,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project creation failed",
      });
    }

    // Project created successfully
    res.status(201).json({
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const showProject = async (req, res) => {
  try {
    const user = await EmployerSchema.find({});

    res.status(200).json({
      message: "Project verified",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const GettinguserDetails = async (req, res) => {
  try {
    const users = await RegisterSchema.find({});

    if (users.length === 0) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    // Users found
    res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const sendApprovalMail = async (req, res) => {
  const { id } = req.params;
  const updateuser = req.body;

  try {
    const updatedUser = await RegisterSchema.findByIdAndUpdate(id, updateuser, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const existingToken = await TokenSchema.findOne({
      userId: updatedUser._id,
    });
    if (existingToken) {
      return res
        .status(400)
        .json({ message: "Token already exists for the user" });
    }

    const tokenValue = crypto.randomBytes(32).toString("hex");
    const newToken = new TokenSchema({
      userId: updatedUser._id,
      token: tokenValue,
    });
    await newToken.save();

    const verificationUrl = `/verify/${updatedUser._id}/${tokenValue}`;
    await ApprovedMailer.sendVerificationEmail(
      updatedUser.email,
      verificationUrl
    );

    return res.status(200).json({
      message: "Verification email sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error sending approval email",
      error: error.message,
    });
  }
};


module.exports = {
  Createproject,
  GettinguserDetails,
  sendApprovalMail,
  showProject,
};
