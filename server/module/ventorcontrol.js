const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const RegisterSchema = require("../usermodel/RegisterSchema.js");
const sendEmailToVendor = require("../utils/RegisterMailer.js");

const RegisterPostMethod = async (req, res) => {
  const {
    fullname,
    phone,
    company,
    address,
    city,
    state,
    pin,
    pan,
    ifsccode,
    accountnum,
    password,
    gst,
    email,
  } = req.body;

  try {
    const user = await RegisterSchema.create({
      fullname,
      phone,
      company,
      address,
      city,
      state,
      pin,
      pan,
      ifsccode,
      accountnum,
      password,
      gst,
      email,
    });
    const savedUser = await user.save();
    await sendEmailToVendor(email);

    // Return success response
    return res.status(200).json({
      message: "User saved successfully",
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal error",
    });
  }
};

////////////////////////////

module.exports = {
  RegisterPostMethod,
};
