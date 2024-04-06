const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const TokenSchema = require("../usermodel/TokenSchema.js");
const jwt = require("jsonwebtoken");
const RegisterSchema = require("../usermodel/RegisterSchema.js");
const sendEmailToVendor = require("../utils/RegisterMailer.js");
const sendEmail = require("../utils/Sendmailer.js");

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
    const hashedPassword = await bcrypt.hash(password, 10);

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
      password: hashedPassword,
      gst,
      email,
    });

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "1h",
    });

    await user.save();

    await sendEmailToVendor(email, token); 

    res.status(201).json({
      message: "User registered successfully",
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//login creditails
const loginMethod = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await RegisterSchema.findOne({ email, });

    const singleuser = await RegisterSchema.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if user is verified
    if (!user.verified) {
      return res.status(301).json({ message: "User not verified" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(405).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      token: token,
      data: singleuser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


// send password link

const Emailpassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await RegisterSchema.findone({ email });

    if (!user) {
      return res.status(401).json({
        message: "user not found",
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

    res
      .status(200)
      .send({ message: "Password reset link sent to your email account" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error sending password",
    });
  }
};

const Bookmarkprojects = async (req, res) => {
  const {projectid} =req.body;
  const { id } = req.params;
  try {
    const finduser = await RegisterSchema.findById(id);

    if(!finduser) {
      res.status(404).json({
        message: "user is not found",
      })
    }
    finduser.intestedprojects.push(projectid);

    await finduser.save();

    res.status(200).json({
      message: "successfully saved project",
    })

  } catch (error) {
    res.status(500).json({
      message: "Error saving project",
    })
  }
};



module.exports = {
  RegisterPostMethod,
  Emailpassword,
  loginMethod,
  Bookmarkprojects
};
