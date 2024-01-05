import express  from "express"
import { allBanner, createBanner, updateBanner } from "../controller/bannerController.js";
const bannerRoutes = express.Router();

bannerRoutes.post('/create-banner',createBanner);
bannerRoutes.put('/update-banner/:id',updateBanner);
bannerRoutes.get('/view-banner/',allBanner);


export default bannerRoutes;