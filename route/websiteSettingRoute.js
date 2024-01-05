import express  from "express"
import { createwebsiteSetting, updateSetting } from "../controller/website-SettingsController.js";

const websettingRoutes = express.Router();

websettingRoutes.post('/create-setting',createwebsiteSetting);
websettingRoutes.put('/update-setting/:id',updateSetting);


export default websettingRoutes;