import express  from "express"
import { createBanner } from "../controller/bannerController.js";
const bannerRoutes = express.Router();

bannerRoutes.post('/create-banner',createBanner);


export default bannerRoutes;