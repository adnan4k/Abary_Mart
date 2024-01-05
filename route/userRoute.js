import express  from "express"
import { addUser } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post('/create-user',addUser);



export default userRoutes;