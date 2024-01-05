import express  from "express"
import { createBanner, updateBanner } from "../controller/bannerController.js";
const bannerRoutes = express.Router();

bannerRoutes.post('/create-banner',createBanner);
bannerRoutes.put('/update-banner/:id',updateBanner);


export default bannerRoutes;