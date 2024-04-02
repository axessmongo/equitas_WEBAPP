const RegisterSchema = require("../usermodel/RegisterSchema.js");

const Registeruser = async (req, res) => {
  try {
    const users = await RegisterSchema.find({});

    res.status(200).json({
      message: "Users retrieved successfully",
      data: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

module.exports = { Registeruser };
