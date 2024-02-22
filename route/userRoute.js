import express  from "express"
import { addUser, login, signup, viewLogin } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post('/create-user',addUser);
userRoutes.post('/login',login);
userRoutes.get('/view',viewLogin);
userRoutes.get('/signup',signup);



export default userRoutes;