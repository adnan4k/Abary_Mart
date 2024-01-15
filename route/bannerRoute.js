import express  from "express"
import { allBanner, createBanner, deleteBanner, presentBanner, update, updateBanner } from "../controller/bannerController.js";
const bannerRoutes = express.Router();

bannerRoutes.post('/create-banner',createBanner);
bannerRoutes.post('/update-banner/:id',updateBanner);
bannerRoutes.get('/view-banner/',allBanner);
bannerRoutes.get('/present-banner/:id',update);
bannerRoutes.get('/present-banner',update);
bannerRoutes.get('/edit/:id',update);
bannerRoutes.delete('/delete/:id',deleteBanner);


export default bannerRoutes;