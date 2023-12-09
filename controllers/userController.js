import userModel from "../models/userModel.js";





// get all users
export const userController = async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).send({
        success: true,
        message: "All Users List",
        users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all Users",
      });
    }
  };
  