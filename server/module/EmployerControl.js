const RegisterSchema = require("../usermodel/RegisterSchema.js");
const projectCreate = require("../usermodel/EmployerProject.js");

const Registeruser = async (req, res) => {
  try {
    const users = await RegisterSchema.find({});

    res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
//create a new project with employeer

const creatproject = async (req, res) => {
  const { projectname, opendate, closeDate, projectarea, Description } =
    req.body;

  try {
    const user = await projectCreate.create({
      projectname,
      closeDate,
      opendate,
      projectarea,
      Description,
    });
    res.status(200).json({
      message: "Project created successfully",
      data: user,
    });
  } catch (error) {
    res.status(error.status).json({
      message: "Project creation failed",
      data: user,
    });
  }
};

//ongoing project

const ongoingProject = async (req, res) => {
  try {
    const project = await projectCreate.findById(id);
    res.status(200).json({
      message: "Project get updated successfully",
      data: project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred whileongoing project",
    });
  }
};

module.exports = { Registeruser, creatproject, ongoingProject };
