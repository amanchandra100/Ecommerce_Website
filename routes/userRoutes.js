import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {userController,} from "./../controllers/userController.js";

const router = express.Router();

//routes

//Get All users
router.get("/get-users",
requireSignIn,
isAdmin,
userController);



export default router;