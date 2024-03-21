const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const RegisterSchema = require("../Usermodel/RegisterSchema.js");
const TokenSchema = require("../Usermodel/TokenSchema.js");
const Sendmailer =require("../utils/Sendmailer.js");

const RegisterPostMethod = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const existingUser = await RegisterSchema.findOne({ email });

    if (existingUser) {
      console.error("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new RegisterSchema({
      fname,
      lname,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const newToken = new TokenSchema({
      userId: savedUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    await newToken.save();

    return res.status(200).json({
      message: "User saved successfully",
      data: savedUser,
      user: newToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal error",
    });
  }
};

const loginpostmethod = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await RegisterSchema.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    let token = await TokenSchema.findOne({ userId: user._id });

    if (!token) {
      token = await new TokenSchema({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    return res.status(200).json({
      message: "Login successful",
      token: token.token,
      user: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//forget-password-change:

const forgetpassword = async (req, res,) => {
  const { email } = req.body;

  try {
      // Check if the user exists with the provided email
      const user = await RegisterSchema.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const resetToken = crypto.randomBytes(20).toString("hex");
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
      await user.save();

      const url = `http://localhost:3000/password-reset/${user._id}/${resetToken}`;
      await Sendmailer(user.email, resetToken);

      res.status(200).send({ message: "Password reset link sent to your email account" });
      
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: error.message,
      });
  }
};

module.exports = { RegisterPostMethod, loginpostmethod,forgetpassword };
