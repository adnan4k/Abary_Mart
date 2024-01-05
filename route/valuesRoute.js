import express  from "express"
import { allValues, createValues, updateValues } from "../controller/valuesController.js";
const valuesRoutes = express.Router();

valuesRoutes.post('/create-values',createValues);
valuesRoutes.put('/update-values/:id',updateValues);
valuesRoutes.get('/view-values/',allValues);


export default valuesRoutes;