import express  from "express"
import { allWebsetting, createwebsiteSetting, updateSetting } from "../controller/website-SettingsController.js";

const websettingRoutes = express.Router();

websettingRoutes.post('/create-setting',createwebsiteSetting);
websettingRoutes.put('/update-setting/:id',updateSetting);
websettingRoutes.get('/view-setting',allWebsetting);


export default websettingRoutes;