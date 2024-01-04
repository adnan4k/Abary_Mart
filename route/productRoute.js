import express  from "express"
import { createProduct } from "../controller/productController.js";

const productRoutes = express.Router();

productRoutes.post('/create-product',createProduct);


export default productRoutes;