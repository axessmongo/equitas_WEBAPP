const nodemailer = require("nodemailer");
require("dotenv").config();

const Sendmailer = async (email, resetToken) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465, 
      secure: true, // Use SSL
      auth: {
        user: process.env.user, 
        pass: process.env.password,
      },
    });

    const mailOptions = {
      from: process.env.user,
      to: email,
      subject: "Password Reset Link",
      text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                http://localhost:3000/reset-password/${resetToken}\n\n

                If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    return "Error sending email. Please try again later.";
  }
};

module.exports = Sendmailer;
