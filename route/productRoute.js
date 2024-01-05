import express  from "express"
import { createProduct, updateProduct } from "../controller/productController.js";

const productRoutes = express.Router();

productRoutes.post('/create-product',createProduct);
productRoutes.put('/update-product/:id',updateProduct);


export default productRoutes;