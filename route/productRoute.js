import express  from "express"
import { allProduct, createProduct, deleteProduct, presentProduct, update, updateProduct } from "../controller/productController.js";

const productRoutes = express.Router();

productRoutes.post('/create-product',createProduct);
productRoutes.post('/update-product/:id',updateProduct);
productRoutes.get('/view-product',allProduct);
productRoutes.get('/present-product/:id',update);
productRoutes.get('/present-product',update);
productRoutes.get('/edit/:id',update);
productRoutes.delete('/delete/:id',deleteProduct);



export default productRoutes;