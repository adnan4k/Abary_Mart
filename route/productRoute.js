import express  from "express"
import { allProduct, createProduct, presentProduct, updateProduct } from "../controller/productController.js";

const productRoutes = express.Router();

productRoutes.post('/create-product',createProduct);
productRoutes.put('/update-product/:id',updateProduct);
productRoutes.get('/view-product',allProduct);
productRoutes.get('/present-product',presentProduct);


export default productRoutes;