const nodemailer = require("nodemailer");
require("dotenv").config();


const sendEmailToVendor = async (fullname, email, subject, url) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true, // Use SSL
        auth: {
          user: process.env.user, // Fixing the env variable name
          pass: process.env.password, // Fixing the env variable name
        },
      });
  
      const mailOptions = {
        from: process.env.email,
        to: email,
        subject: subject,
        text: `Hello ${fullname}, please click on the following link to verify your account: ${url}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      console.log("Email sent successfully");
      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      return { error: "Error sending email. Please try again later." };
    }
  };

  module.exports =sendEmailToVendor