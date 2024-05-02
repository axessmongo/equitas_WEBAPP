const admins = require("../usermodel/AdminSchema.js");

const Createadmin = async (req, res,) => {

  try {
    const newAdmin = new admins({
        email: req.body.email,
      });
  

      await newAdmin.save();
  
      res.status(201).send("Email created successfully");
      
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error creating admin account",
    });
  }
};

const GettingAdmin = async (req, res) => {
  try {
const adminuser = await admins.findOne()

if(!adminuser){
    res.status(404).json({
        message: "Admin user not found",
    })
}

res.status(200).json({
    message: "user received",
    data: adminuser
})

  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error getting admin" });
  }
};

module.exports = { Createadmin,GettingAdmin };
