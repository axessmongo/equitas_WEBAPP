const nodemailer = require("nodemailer");
require("dotenv").config();


const sendEmailToventor = async (email, Token) => {
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
        from: process.env.user, // Specify a valid email address
        to: email,
        subject: "Equitas bank",
        text:"Thank you for registering for equitas bank team will be contact soon "
      };
  
      await transporter.sendMail(mailOptions);
  
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };
  
  module.exports = sendEmailToventor;