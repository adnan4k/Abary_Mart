import express  from "express"
import { addUser, login } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post('/create-user',addUser);
userRoutes.post('/login',login);



export default userRoutes;