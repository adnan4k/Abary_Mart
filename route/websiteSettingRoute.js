import express  from "express"
import { createwebsiteSetting } from "../controller/website-SettingsController.js";

const websettingRoutes = express.Router();

websettingRoutes.post('/create-setting',createwebsiteSetting);


export default websettingRoutes;