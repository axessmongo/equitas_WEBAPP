const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const TokenSchema = require("../usermodel/TokenSchema.js");
const RegisterSchema = require("../usermodel/RegisterSchema.js");
const sendEmailToVendor = require("../utils/RegisterMailer.js");
const sendEmail = require("../utils/CreateRegisterTokenmail.js");


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
    const existingUser = await RegisterSchema.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: 'User with given email already exists!',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new RegisterSchema({
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
      password: hashedPassword,
      gst,
      email,
    });

    // Save the new user
    const savedUser = await newUser.save();

    // Create a verification token
    const token = await new TokenSchema({
      userId: savedUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // Send email to vendor
    const url = `${process.env.BASE_URL}users/${savedUser.id}/verify/${token.token}`;
    const emailSubject = "Verify Your Account";
    const emailText = `Hello ${fullname} \n, please click on the following link to verify your account: ${url}`;
    
    const emailResponse = await sendEmailToVendor(email, emailSubject, emailText);

    if (emailResponse.error) {
      return res.status(500).json({
        message: "Error sending verification email",
        error: emailResponse.error
      });
    }

    // Return success response
    return res.status(200).json({
      message: "User saved successfully",
      data: savedUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal error",
      error: error.message
    });
  }
};

const Getesting = async (req, res) => {
  try {
		const user = await RegisterSchema.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await TokenSchema.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await RegisterSchema.updateOne({ _id: user._id, verified: true });
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}


const Emailpassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await RegisterSchema.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    let token = await TokenSchema.findOne({ userId: user._id });
    if (!token) {
      token = await new TokenSchema({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }
    const url = `${process.env.BASE_URL}password-reset/${user._id}/${token.token}/`;

    await sendEmail(user.email, "Password Reset", url);

    res.status(200).send({ message: "Password reset link sent to your email account" });

  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error sending password reset link",
    });
  }
};

const ResetLink = async (req, res) => {
  try {
    const user = await RegisterSchema.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await TokenSchema.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    res.status(200).send("Valid Url");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const Setnewpassword = async (req, res) => {
  const { password } = req.body;

  try {
    const user = await RegisterSchema.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await TokenSchema.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Delete the token
    await TokenSchema.findOneAndDelete({ _id: token._id });

    res.status(200).json({ message: "Password updated successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error updating password",
    });
  }
};

module.exports = {
  RegisterPostMethod,
  Emailpassword,
  ResetLink,
  Setnewpassword,
  Getesting
};
