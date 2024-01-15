import express  from "express"
import { allWebsetting, createwebsiteSetting, deletewebsetting, update, updateSetting } from "../controller/website-SettingsController.js";

const websettingRoutes = express.Router();

websettingRoutes.post('/create-setting',createwebsiteSetting);
websettingRoutes.post('/update-setting/:id',updateSetting);
websettingRoutes.get('/view-setting',allWebsetting);
websettingRoutes.get('/present-setting/:id',update);
websettingRoutes.get('/present-setting/',update);
websettingRoutes.get('/edit/:id',update);
websettingRoutes.delete('/delete/:id',deletewebsetting);


export default websettingRoutes;