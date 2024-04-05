const sendEmailToVendor = async (email, subject, text) => {
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
        subject: subject,
        text: text,
      };
  
      await transporter.sendMail(mailOptions);
  
      console.log("Email sent successfully");
      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      return { error: "Error sending email. Please try again later." };
    }
  };
  
  module.exports = sendEmailToVendor;
  