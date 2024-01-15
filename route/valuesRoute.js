import express  from "express"
import { allValues, createValues, deleteValues, presentValues, update, updateValues } from "../controller/valuesController.js";
const valuesRoutes = express.Router();

valuesRoutes.post('/create-values',createValues);
valuesRoutes.post('/update-values/:id',updateValues);
valuesRoutes.get('/view-values/',allValues);
valuesRoutes.get('/present-values/',update);
valuesRoutes.get('/present-values/:id',update);
valuesRoutes.get('/edit/:id',update);
valuesRoutes.delete('/delete/:id',deleteValues);


export default valuesRoutes;