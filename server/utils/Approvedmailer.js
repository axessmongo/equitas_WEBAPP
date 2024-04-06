const nodemailer = require("nodemailer");

const sendVerificationEmail = async (recipientEmail, verificationUrl) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465, // Use port 465 for SMTP over SSL/TLS
      secure: true, // Use SSL
      auth: {
        user: process.env.user,
        pass: process.env.password,
      },
    });

    const mailOptions = {
      from: process.env.user,
      to: recipientEmail,
      subject: "Equitas Bank Verification to Login Access",
      text: "You are receiving this email because of login to Equitas Bank",
     
      // \n\nPlease click on the following link, or paste this into your browser to complete the process Kindly check click this token:\n\nhttp://localhost:3000${verificationUrl}\n\n`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

module.exports = { sendVerificationEmail };
