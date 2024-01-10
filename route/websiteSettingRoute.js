import express  from "express"
import { allWebsetting, createwebsiteSetting, presentWebsetting, updateSetting } from "../controller/website-SettingsController.js";

const websettingRoutes = express.Router();

websettingRoutes.post('/create-setting',createwebsiteSetting);
websettingRoutes.put('/update-setting/:id',updateSetting);
websettingRoutes.get('/view-setting',allWebsetting);
websettingRoutes.get('/present-setting',presentWebsetting);


export default websettingRoutes;